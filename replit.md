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

- Config: root `vercel.json`
- Builds only `@workspace/memorial` (not mockup-sandbox / api-server)
- Output: `artifacts/memorial/dist/public`
- SPA rewrite to `index.html`

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

- **What changed:** Added `vercel.json` so the Vercel build runs typecheck + `@workspace/memorial` build only, and serves `artifacts/memorial/dist/public`. Vite configs for memorial and mockup-sandbox default `PORT` to `5173` and `BASE_PATH` to `/` when unset.
- **Why:** Root `pnpm run build` recursively builds every package. On Vercel, `mockup-sandbox` failed because Replit-required `PORT`/`BASE_PATH` were missing. The product deployed to Vercel is the static memorial landing page, not the Replit mockup sandbox or API server.
- **Alternatives considered:** (1) Set `PORT`/`BASE_PATH` as Vercel env vars and keep recursive build — would still waste CI time building unused packages and could fail on api-server assumptions. (2) Remove mockup-sandbox from the workspace — too invasive. (3) Make env vars optional only — still builds unnecessary packages.
- **Why chosen:** Scoped build matches what users actually host; defaults keep Replit override-friendly and unblock CI.
- **Benefits:** Reliable Vercel deploys; faster builds; clear separation of deployable app vs workspace tooling.
- **Drawbacks:** Dashboard “Build Command” overrides must not conflict with `vercel.json`; full monorepo build locally still uses `pnpm run build`.
- **Future work:** If the API is later hosted, add a separate Vercel/server project; consider `build:memorial` script alias for local parity.

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
