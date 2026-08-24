import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const here = dirname(fileURLToPath(import.meta.url));
const nativeRoot = resolve(here, "..");
const repoRoot = resolve(nativeRoot, "..");
const androidRoot = join(nativeRoot, "android");
const overlayRoot = join(nativeRoot, "android-overrides");
const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const cap = join(nativeRoot, "node_modules", ".bin", process.platform === "win32" ? "cap.cmd" : "cap");

function run(command, args, cwd, env = process.env) {
  const result = spawnSync(command, args, { cwd, env, stdio: "inherit" });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} a échoué avec le code ${result.status}`);
  }
}

function requireNode22() {
  const major = Number(process.versions.node.split(".")[0]);
  if (!Number.isFinite(major) || major < 22) {
    throw new Error(`Capacitor 8 requiert Node >= 22 (version courante : ${process.versions.node}).`);
  }
}

function buildWeb() {
  run(npm, ["run", "build"], repoRoot, { ...process.env, NEXT_PUBLIC_BASE_PATH: "" });
}

function ensureAndroidPlatform() {
  if (!existsSync(androidRoot)) {
    run(cap, ["add", "android"], nativeRoot);
  }
}

function syncCapacitor() {
  run(cap, ["sync", "android"], nativeRoot);
}

function applyOverlay() {
  cpSync(overlayRoot, androidRoot, { recursive: true });
}

function patchGradle() {
  const buildGradlePath = join(androidRoot, "app", "build.gradle");
  let source = readFileSync(buildGradlePath, "utf8");

  const workDependency = 'implementation "androidx.work:work-runtime:2.11.2"';
  if (!source.includes(workDependency)) {
    source = source.replace("dependencies {", `dependencies {\n    ${workDependency}`);
  }

  source = source.replace(
    "minSdkVersion rootProject.ext.minSdkVersion",
    "minSdkVersion 26",
  );

  writeFileSync(buildGradlePath, source, "utf8");
}

function n(value) {
  return String(Math.round(value * 1000) / 1000);
}

function iconGeometry() {
  const size = 108;
  const outerR = 39;
  const sideStroke = 9;
  const capStroke = 14.5;
  const pupilR = 11;
  const fill = 0.46;

  const scale = (fill * size) / (2 * outerR);
  const c = size / 2;
  const r = outerR * scale;
  const rx = (outerR - sideStroke) * scale;
  const ry = (outerR - capStroke) * scale;
  const pr = pupilR * scale;

  const ring = [
    `M ${n(c)} ${n(c - r)}`,
    `A ${n(r)} ${n(r)} 0 1 0 ${n(c)} ${n(c + r)}`,
    `A ${n(r)} ${n(r)} 0 1 0 ${n(c)} ${n(c - r)}`,
    "Z",
    `M ${n(c)} ${n(c - ry)}`,
    `A ${n(rx)} ${n(ry)} 0 1 0 ${n(c)} ${n(c + ry)}`,
    `A ${n(rx)} ${n(ry)} 0 1 0 ${n(c)} ${n(c - ry)}`,
    "Z",
  ].join(" ");

  const pupil = [
    `M ${n(c)} ${n(c - pr)}`,
    `A ${n(pr)} ${n(pr)} 0 1 0 ${n(c)} ${n(c + pr)}`,
    `A ${n(pr)} ${n(pr)} 0 1 0 ${n(c)} ${n(c - pr)}`,
    "Z",
  ].join(" ");

  return { size, ring, pupil };
}

function generateIcons() {
  const palettePath = join(repoRoot, "src", "domain", "reminder", "urgency-palette.json");
  const palette = JSON.parse(readFileSync(palettePath, "utf8"));
  if (
    !Array.isArray(palette) ||
    palette.length !== 14 ||
    palette.some((color) => !/^#[0-9a-f]{6}$/i.test(color))
  ) {
    throw new Error("La palette du rappel doit contenir exactement 14 couleurs hexadécimales.");
  }

  const res = join(androidRoot, "app", "src", "main", "res");
  const drawable = join(res, "drawable");
  const values = join(res, "values");
  const mipmap = join(res, "mipmap-anydpi");
  const mipmapV26 = join(res, "mipmap-anydpi-v26");
  mkdirSync(drawable, { recursive: true });
  mkdirSync(values, { recursive: true });
  mkdirSync(mipmap, { recursive: true });
  mkdirSync(mipmapV26, { recursive: true });

  const { size, ring, pupil } = iconGeometry();

  writeFileSync(
    join(drawable, "ic_launcher_foreground.xml"),
    `<?xml version="1.0" encoding="utf-8"?>\n` +
      `<vector xmlns:android="http://schemas.android.com/apk/res/android"\n` +
      `    android:width="${size}dp"\n` +
      `    android:height="${size}dp"\n` +
      `    android:viewportWidth="${size}"\n` +
      `    android:viewportHeight="${size}">\n` +
      `    <path android:fillColor="#FAFAFA" android:fillType="evenOdd" android:pathData="${ring}" />\n` +
      `    <path android:fillColor="#FAFAFA" android:pathData="${pupil}" />\n` +
      `</vector>\n`,
    "utf8",
  );

  const colors = palette
    .map(
      (color, step) =>
        `    <color name="icon_ground_${String(step).padStart(2, "0")}">${color}</color>`,
    )
    .join("\n");
  writeFileSync(
    join(values, "dynamic_icon_colors.xml"),
    `<?xml version="1.0" encoding="utf-8"?>\n<resources>\n${colors}\n</resources>\n`,
    "utf8",
  );

  for (let step = 0; step < palette.length; step += 1) {
    const suffix = String(step).padStart(2, "0");
    writeFileSync(
      join(mipmap, `ic_launcher_${suffix}.xml`),
      `<?xml version="1.0" encoding="utf-8"?>\n` +
        `<vector xmlns:android="http://schemas.android.com/apk/res/android" android:width="${size}dp" android:height="${size}dp" android:viewportWidth="${size}" android:viewportHeight="${size}">\n` +
        `    <path android:fillColor="${palette[step]}" android:pathData="M0,0H108V108H0Z" />\n` +
        `    <path android:fillColor="#FAFAFA" android:fillType="evenOdd" android:pathData="${ring}" />\n` +
        `    <path android:fillColor="#FAFAFA" android:pathData="${pupil}" />\n` +
        `</vector>\n`,
      "utf8",
    );

    writeFileSync(
      join(mipmapV26, `ic_launcher_${suffix}.xml`),
      `<?xml version="1.0" encoding="utf-8"?>\n` +
        `<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n` +
        `    <background android:drawable="@color/icon_ground_${suffix}" />\n` +
        `    <foreground android:drawable="@drawable/ic_launcher_foreground" />\n` +
        `</adaptive-icon>\n`,
      "utf8",
    );
  }
}

requireNode22();
buildWeb();
ensureAndroidPlatform();
syncCapacitor();
applyOverlay();
patchGradle();
generateIcons();

console.log("Android synchronisé : Capacitor + icône dynamique Curiosity.");
