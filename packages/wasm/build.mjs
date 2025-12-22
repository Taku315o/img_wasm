import { mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { EMCC_FLAGS } from "./emcc_flags.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const distDir = path.resolve(__dirname, "dist");

mkdirSync(distDir, { recursive: true });

const src = path.resolve(root, "packages/core/src/img_core.cpp");
const includeDir = path.resolve(root, "packages/core/include");

const outJs = path.resolve(distDir, "img_core.js"); // これが createModule を export
// 生成される wasm は dist/img_core.wasm になる
const args = [
  src,
  "-I", includeDir,
  ...EMCC_FLAGS,
  "-o", outJs
];

console.log("em++", args.join(" "));
const r = spawnSync("em++", args, { stdio: "inherit" });

process.exit(r.status ?? 1);
