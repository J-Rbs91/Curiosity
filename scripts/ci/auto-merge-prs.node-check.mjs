import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {REQUIRED_CHECKS, protectedChange, eligibleMetadata, checksGate, reviewGate} from './auto-merge-prs.mjs';

const repo = 'J-Rbs91/Curiosity';
const base = {
  state: 'open', draft: false, base: {ref: 'main'},
  head: {repo: {full_name: repo}}, mergeable: true, mergeable_state: 'clean',
  labels: [], requested_reviewers: [], requested_teams: []
};
const success = REQUIRED_CHECKS.map((name, i) => ({
  name, id: i + 1, app: {slug: 'github-actions'}, status: 'completed', conclusion: 'success'
}));

test('PR autorisée : ouverte, non draft, ciblant main et sans conflit', () => {
  assert.equal(eligibleMetadata(base, repo), null);
});
test('PR non autorisée : brouillon, conflit, fork ou revue attendue', () => {
  assert.ok(eligibleMetadata({...base, draft: true}, repo));
  assert.ok(eligibleMetadata({...base, mergeable: false, mergeable_state: 'dirty'}, repo));
  assert.ok(eligibleMetadata({...base, head: {repo: {full_name: 'external/repo'}}}, repo));
  assert.ok(eligibleMetadata({...base, requested_reviewers: [{login: 'reviewer'}]}, repo));
});
test('PR en pause : etiquette explicite', () => {
  assert.ok(eligibleMetadata({...base, labels: [{name: 'NO-AUTO-MERGE'}]}, repo));
});
test('gates CI : les trois checks sont obligatoires', () => {
  assert.equal(checksGate(success), null);
  assert.ok(checksGate(success.slice(0, 2)));
  assert.ok(checksGate([...success, {...success[0], id: 22, conclusion: 'failure'}]));
});
test('review CHANGES_REQUESTED non résolue bloque', () => {
  const request = {user: {login: 'reviewer'}, state: 'CHANGES_REQUESTED', submitted_at: '2026-11-11T10:00:00Z'};
  assert.ok(reviewGate([request]));
  assert.equal(reviewGate([request, {...request, state: 'APPROVED', submitted_at: '2026-11-11T10:01:00Z'}]), null);
});
test('workflow et moteur de fusion jamais auto-fusionnés', () => {
  assert.equal(protectedChange('.github/workflows/ci.yml'), true);
  assert.equal(protectedChange('scripts/ci/auto-merge-prs.mjs'), true);
  assert.equal(protectedChange('corpus/deepenings/analyse-du-travail.json'), false);
});
