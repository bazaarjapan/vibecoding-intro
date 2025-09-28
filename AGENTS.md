# Repository Guidelines

## Project Structure & Module Organization
- `docs/` contains the VitePress manual; keep `.vitepress/config.ts` updated when adding sections so the Japanese nav reflects new material and base paths stay correct.
- Author new chapters under `docs/guide/` with hyphenated filenames (e.g., `docs/guide/review.md`) and include any shared assets in `docs/public/` (SVG/ICO).
- `.github/workflows/deploy.yml` drives the GitHub Pages build from `main`; avoid moving directories without updating the workflow and README references.

## Build, Test, and Development Commands
- `npm install` (Node 18+) installs VitePress; run whenever dependencies change.
- `npm run docs:dev` serves the site with hot reload for content editing.
- `npm run docs:build` generates `docs/.vitepress/dist`; pair with `npm run docs:preview` for a production-like smoke test before pushing.

## Coding Style & Naming Conventions
- TypeScript configuration files use ES modules, double quotes, and two-space indentation; mirror the existing style when editing `config.ts` or adding scripts.
- Markdown pages start with a level-1 heading, favor concise Japanese prose, and use ordered lists for workflows; embed shell snippets in fenced blocks with language hints.
- Asset and file names stay lowercase with hyphens; keep shared branding (e.g., `logo.svg`) in `docs/public/`.

## Testing Guidelines
- There is no automated test suite; treat `npm run docs:build` as the gate to catch syntax/link issues.
- After significant layout or navigation changes, run `npm run docs:preview` and manually click through new links.
- Update `.vitepress/config.ts` sidebar entries when adding files so builds do not emit broken navigation warnings.

## Commit & Pull Request Guidelines
- Follow the `type(scope): summary` format noted in `docs/guide/style-guide.md`; example: `docs(guide): add faq for release flow`.
- Keep commits focused on a single topic and include translations or screenshots when user-facing text changes.
- Pull requests should describe affected pages, list local commands executed, link related issues, and mention any `DOCS_BASE` adjustments.

## Deployment & Environment
- GitHub Pages deploys from the workflow on pushes to `main`; ensure `package-lock.json` is committed so `npm ci` remains available.
- Set the `DOCS_BASE` secret (e.g., `/20250928vibecoding/`) when publishing under a project site; test locally with `DOCS_BASE` exported before merging.
