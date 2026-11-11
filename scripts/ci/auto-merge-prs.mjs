import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';

export const REQUIRED_CHECKS = ['corpus', 'app', 'gitleaks'];
const BLOCK = new Set(['no-auto-merge', 'do-not-merge', 'hold', 'blocked', 'wip', 'manual-review', 'needs-manual-review', 'security-review']);

export function protectedChange(path) {
  return path.startsWith('.github/') || path === '.claude/settings.json' ||
    path.startsWith('scripts/ci/auto-merge-prs.');
}

export function eligibleMetadata(pr, repo) {
  if (pr.state !== 'open') return 'PR fermee';
  if (pr.draft) return 'brouillon';
  if (pr.base?.ref !== 'main') return 'cible hors main';
  if (pr.head?.repo?.full_name?.toLowerCase() !== repo.toLowerCase()) return 'fork externe';
  if (pr.mergeable !== true || pr.mergeable_state !== 'clean') return 'conflit ou etat GitHub inconnu';
  if (pr.requested_reviewers?.length || pr.requested_teams?.length) return 'revue en attente';
  if (pr.labels?.some(x => BLOCK.has(x.name.toLowerCase()))) return 'etiquette bloquante';
  return null;
}

export function checksGate(runs) {
  const recent = new Map();
  for (const run of runs) {
    if (run.app?.slug !== 'github-actions') continue;
    if (!recent.has(run.name) || run.id > recent.get(run.name).id) recent.set(run.name, run);
  }
  for (const name of REQUIRED_CHECKS) {
    const run = recent.get(name);
    if (!run || run.status !== 'completed' || run.conclusion !== 'success') {
      return 'controle CI non valide: ' + name;
    }
  }
  return null;
}

export function reviewGate(reviews) {
  const latest = new Map();
  for (const r of reviews) {
    if (!r.user?.login || !r.submitted_at) continue;
    const key = r.user.login.toLowerCase();
    if (!latest.has(key) || Date.parse(r.submitted_at) >= Date.parse(latest.get(key).submitted_at)) latest.set(key, r);
  }
  return [...latest.values()].some(r => r.state === 'CHANGES_REQUESTED') ? 'revue CHANGES_REQUESTED' : null;
}

function apiClient(repo, token) {
  const prefix = 'https://api.github.com/repos/' + repo;
  async function request(path, method = 'GET', body) {
    const url = prefix + path;
    for (let attempt = 0; attempt < 3; attempt++) {
      const response = await fetch(url, {
        method,
        headers: {Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28', 'Content-Type': 'application/json'},
        body: body ? JSON.stringify(body) : undefined,
        signal: AbortSignal.timeout(20000)
      });
      if (response.ok) return response.status === 204 ? null : response.json();
      const detail = (await response.text()).slice(0, 200);
      if ((response.status === 429 || response.status >= 500) && attempt < 2) {
        await new Promise(resolve => setTimeout(resolve, 750 * (attempt + 1)));
        continue;
      }
      throw new Error('GitHub HTTP ' + response.status + ' ' + path + ' ' + detail);
    }
  }
  async function pages(path) {
    const all = [];
    for (let page = 1; page <= 10; page++) {
      const separator = path.includes('?') ? '&' : '?';
      const data = await request(path + separator + 'per_page=100&page=' + page);
      if (!Array.isArray(data)) throw new Error('Pagination inattendue: ' + path);
      all.push(...data);
      if (data.length < 100) return all;
    }
    throw new Error('Pagination tronquee: ' + path);
  }
  return {request, pages};
}

async function inspectPr(api, number) {
  let pr;
  for (let attempt = 0; attempt < 4; attempt++) {
    pr = await api.request('/pulls/' + number);
    if (pr.mergeable !== null && pr.mergeable_state !== 'unknown') break;
    if (attempt < 3) await new Promise(resolve => setTimeout(resolve, 1500));
  }
  return pr;
}

async function corpusGate(api, files, sha) {
  const entries = files.map(x => x.filename).filter(x => /^corpus\/deepenings\/[^/]+\.json$/.test(x));
  const get = async path => api.request('/contents/' + path.split('/').map(encodeURIComponent).join('/') + '?ref=' + sha);
  const decode = record => Buffer.from(record.content.replace(/\s/g, ''), 'base64');
  for (const path of entries) {
    const slug = path.slice('corpus/deepenings/'.length, -5);
    const work = 'corpus/deepening-audits/work/' + slug;
    let content, gate, review;
    try {
      [content, gate, review] = await Promise.all([
        get(path), get(work + '/factcheck-gate.json'), get(work + '/review.md')
      ]);
    } catch { return 'preuve documentaire absente: ' + slug; }
    if ([content, gate, review].some(x => x.encoding !== 'base64')) return 'encodage inconnu: ' + slug;
    const sha256 = createHash('sha256').update(decode(content)).digest('hex');
    let record;
    try { record = JSON.parse(decode(gate).toString('utf8')); }
    catch { return 'gate illisible: ' + slug; }
    const verdict = decode(review).toString('utf8');
    if (record.verdict !== 'FACTCHECK_PASS' || record.failed !== 0 ||
        record.candidate_sha256 !== sha256 ||
        !/^verdict\s*:\s*ACCEPT\s*$/mi.test(verdict) ||
        !/^factcheck_sha_match\s*:\s*PASS\s*$/mi.test(verdict)) {
      return 'gate factuel non valide: ' + slug;
    }
  }
  return null;
}

async function mergeIfQualified(api, initial, repo, expectedSha) {
  const pr = await inspectPr(api, initial.number);
  if (expectedSha && pr.head?.sha !== expectedSha) return 'SHA remplace';
  const reason = eligibleMetadata(pr, repo);
  if (reason) return reason;
  const [files, reviews, checks, statuses] = await Promise.all([
    api.pages('/pulls/' + pr.number + '/files'),
    api.pages('/pulls/' + pr.number + '/reviews'),
    api.request('/commits/' + pr.head.sha + '/check-runs?per_page=100'),
    api.request('/commits/' + pr.head.sha + '/status')
  ]);
  const sensitive = files.find(x => protectedChange(x.filename));
  if (sensitive) return 'changement sensible, revue manuelle: ' + sensitive.filename;
  if (checks.total_count > 100) return 'plus de 100 checks, inspection manuelle';
  const ci = checksGate(checks.check_runs || []);
  if (ci) return ci;
  const review = reviewGate(reviews);
  if (review) return review;
  const recentStatuses = new Map();
  for (const x of statuses.statuses || []) if (!recentStatuses.has(x.context)) recentStatuses.set(x.context, x);
  for (const s of recentStatuses.values()) if (s.state !== 'success') return 'status bloquant: ' + s.context;
  const doc = await corpusGate(api, files, pr.head.sha);
  if (doc) return doc;
  const fresh = await inspectPr(api, pr.number);
  if (fresh.head?.sha !== pr.head.sha || fresh.base?.sha !== pr.base.sha) return 'branche ou main a evolue';
  const finalGate = eligibleMetadata(fresh, repo);
  if (finalGate) return finalGate;
  const merge = await api.request('/pulls/' + pr.number + '/merge', 'PUT', {
    sha: pr.head.sha, merge_method: 'squash', commit_title: pr.title + ' (#' + pr.number + ')'
  });
  if (!merge?.merged) throw new Error('GitHub ne confirme pas la fusion');
  return 'FUSIONNE: ' + merge.sha;
}

export async function main(env = process.env) {
  const repo = env.GITHUB_REPOSITORY;
  if (!repo || !env.GH_TOKEN || !env.GITHUB_EVENT_PATH) throw new Error('Environnement GitHub incomplet');
  const event = JSON.parse(await readFile(env.GITHUB_EVENT_PATH, 'utf8'));
  if (event.workflow_run) {
    if (event.workflow_run.event !== 'pull_request' || event.workflow_run.conclusion !== 'success') return;
    if (event.workflow_run.head_repository?.full_name?.toLowerCase() !== repo.toLowerCase()) return;
  }
  const api = apiClient(repo, env.GH_TOKEN);
  const open = await api.pages('/pulls?state=open');
  const candidates = event.workflow_run
    ? open.filter(pr => pr.head?.sha === event.workflow_run.head_sha) : open;
  let failed = false;
  for (const pr of candidates) {
    try {
      console.log('#' + pr.number + ': ' + await mergeIfQualified(api, pr, repo, event.workflow_run?.head_sha));
    } catch (error) {
      failed = true;
      console.error('#' + pr.number + ': ' + error.message);
    }
  }
  if (failed) process.exitCode = 1;
}

if (process.argv[1]?.endsWith('/auto-merge-prs.mjs')) {
  main().catch(error => { console.error(error); process.exitCode = 1; });
}
