# macso.org

Public website for the Massachusetts Computer Science Olympiad, built with
React, TypeScript, and Vite.

## Requirements

- [Bun](https://bun.com/) 1.3.14

The required Bun version is pinned in `package.json`. Keep it aligned with the
version used by CI and the deployment platform.

## Setup

```sh
bun install --frozen-lockfile
bun run dev
```

Vite prints the local development URL after startup.

## Commands

| Command                | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `bun run dev`          | Start the development server                  |
| `bun run format`       | Format tracked source and configuration files |
| `bun run format:check` | Check formatting without changing files       |
| `bun run lint`         | Run Oxlint and reject warnings                |
| `bun run typecheck`    | Type-check the project                        |
| `bun run build`        | Type-check and create the production build    |
| `bun run check`        | Run every local quality check used before CI  |
| `bun run size:check`   | Enforce checked-in JavaScript and CSS budgets |
| `bun run lighthouse`   | Run Lighthouse against the production build   |
| `bun run preview`      | Preview the production build locally          |

Run `bun run check` before opening a pull request.

## Environment variables

The venue map requires a public CARTO Basemaps API key. Request a free key at
https://carto.com/basemaps/apikey, copy `.env.example` to `.env.local`, and set
`VITE_CARTO_API_KEY` to the issued key. Restart the dev server after changing it.

For deployment, set `VITE_CARTO_API_KEY` in the Cloudflare Pages build environment
and rebuild the site. Configure the key's allowed domains in CARTO for the site
and any local or preview URLs you use. Without a valid key, CARTO displays an
"API key required" image instead of map tiles.

Values prefixed with `VITE_` are embedded in the browser bundle and must never
contain secrets. Use a public Basemaps key here, not a private CARTO credential.

## Performance gates

CI rejects JavaScript or CSS growth beyond the limits in
`scripts/check-build-size.mjs`. The initial limits leave roughly 10–15% above
the current production build and should be raised only with an explanation in
the pull request.

Lighthouse runs three times against all five generated pages. Accessibility, SEO,
layout stability, blocking time, and best-practice regressions fail CI;
performance-score and largest-contentful-paint regressions initially warn while
the project establishes a stable baseline.

## Deployment

The Cloudflare Pages project should use:

- Build command: `bun install --frozen-lockfile && bun run build`
- Build output directory: `dist`
- Root directory: the repository root

Do not set `SKIP_DEPENDENCY_INSTALL`. Cloudflare copies `public/_headers` into
the production build and applies those response headers to static assets.

## Competition editions

The homepage is the current 2026 competition. Past editions live at
`/competitions/2024/` and `/competitions/2025/`; organization content lives at
`/about/`. Competition-specific sponsors, photos, and results are assigned in
`src/data/competitions.ts`, with shared logo definitions in `src/data/sponsors.ts`.
Archives only display available historical content, never current registration
information. New editions need a static HTML entry, Vite input, sitemap entry,
and Lighthouse URL in addition to their competition data.
