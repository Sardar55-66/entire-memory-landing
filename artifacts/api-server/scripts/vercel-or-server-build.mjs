import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const apiServerRoot = path.resolve(__dirname, "..");
const workspaceRoot = path.resolve(apiServerRoot, "../..");

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    stdio: "inherit",
    env: process.env,
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

// Vercel project Root Directory is currently artifacts/api-server.
// On Vercel, build the static memorial site instead of the Express bundle.
if (process.env.VERCEL === "1") {
  run("pnpm", ["run", "typecheck"], workspaceRoot);
  run("pnpm", ["--filter", "@workspace/memorial", "run", "build"], workspaceRoot);
  process.exit(0);
}

run("node", ["./build.mjs"], apiServerRoot);
