# Eternal Tribute

Memorial landing page for remembering a loved one — static Vite/React site with biography, timeline, gallery, and memories.

## Run & Operate

- `pnpm --filter @workspace/memorial run dev` — memorial frontend (needs `PORT`/`BASE_PATH` on Replit; defaults to `5173` and `/` otherwise)
- `pnpm --filter @workspace/memorial run build` — production build for the memorial site
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all workspace packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env (API/db): `DATABASE_URL` — Postgres connection string

## Deploy (Vercel)

- Preferred Root Directory: `artifacts/memorial` (uses `artifacts/memorial/vercel.json`)
- Current/compatible Root Directory: `artifacts/api-server` (uses `artifacts/api-server/vercel.json` and builds memorial when `VERCEL=1`)
- Also present: root `vercel.json` if Root Directory is the repo root
- Builds only `@workspace/memorial` (not mockup-sandbox)
- Output: `artifacts/memorial/dist/public`
- SPA rewrite to `index.html`
- If Dashboard has Build Command Override set to `pnpm run typecheck`, clear it or disable Override so `vercel.json` / `build` can run

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: Vite + React (memorial)
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (API), Vite (frontend)

## Where things live

- Memorial UI: `artifacts/memorial`
- API server: `artifacts/api-server`
- Content copy: `artifacts/memorial/src/data/content.ts`
- Vercel deploy: `vercel.json`

## Architecture decisions

### Vercel deploys only the memorial package (2026-07-14)

- **What changed:** Added `vercel.json` at repo root, `artifacts/memorial`, and `artifacts/api-server`. Vite configs default `PORT`/`BASE_PATH`. When `VERCEL=1`, `artifacts/api-server` `build` builds the memorial static site (project Root Directory is currently `artifacts/api-server`).
- **Why:** Recursive monorepo build failed on Vercel; Root Directory was set to `artifacts/api-server`, so output path `artifacts/memorial/dist/public` was resolved incorrectly and the wrong package scripts ran.
- **Alternatives considered:** (1) Env-only PORT/BASE_PATH — still built unused packages. (2) Require dashboard Root Directory change only — fragile without code fallback. (3) Remove api-server from workspace — too invasive.
- **Why chosen:** Package-level `vercel.json` + Vercel-aware build script works with the current Root Directory and still supports memorial/root layouts.
- **Benefits:** Deploy succeeds without dashboard surgery; memorial remains the hosted artifact.
- **Drawbacks:** api-server `build` behaves differently on Vercel vs locally (`build:server` for Express bundle).
- **Future work:** Set Vercel Root Directory to `artifacts/memorial` and remove the api-server deploy shim.

## Product

Public memorial page: hero, biography, timeline, photo gallery, quoted memories, footer with Eternal Tribute watermark.

## User preferences

- Site copy in Russian.
- Footer watermark branding: Eternal Tribute.

## Gotchas

- Vercel must use the memorial output directory from `vercel.json`, not the repo root.
- If the Vercel project dashboard overrides Build Command to `pnpm run build`, change it to use `vercel.json` or set: `pnpm run typecheck && pnpm --filter @workspace/memorial run build`.
- Replit still supplies `PORT` and `BASE_PATH`; other environments rely on defaults.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
