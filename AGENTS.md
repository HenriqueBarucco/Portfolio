# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js App Router portfolio written in TypeScript.

- `src/app/` contains route pages and application-wide styles. Current routes include `/`, `/projetos`, and `/contato`.
- `src/components/` contains reusable UI grouped by feature, such as `about/`, `navbar/`, `project/`, and `effects/`.
- `src/redux/` contains the Redux provider, store, and reducers used for shared UI state such as color mode.
- `public/` stores static images and other assets referenced by the app.
- `Dockerfile` defines the production image; `@/*` resolves to `src/*`.

## Build, Test, and Development Commands

Use Node `22.3.0` from `.node-version` and pnpm.

- `pnpm install` installs dependencies from `pnpm-lock.yaml`.
- `pnpm start:dev` starts the local Next.js development server with Turbopack.
- `pnpm lint` runs the Next.js/Rocketseat ESLint configuration.
- `pnpm build` creates a production build; `pnpm start` serves it on port 3000.
- `docker build -t portfolio . && docker run --rm -p 3000:3000 portfolio` validates the container workflow.

## Coding Style & Naming Conventions

Use two-space indentation, LF line endings, and single-quoted strings. Follow strict TypeScript settings and the existing no-semicolon style. Name React components in PascalCase, files and directories in lowercase kebab-case (for example, `about-me.tsx`), and use the `@/` import alias for modules under `src`. Prefer existing Tailwind utility patterns and keep feature-specific components in their matching directory. Run `pnpm lint` before submitting changes.

## Testing Guidelines

No test runner or test directory is currently configured. For every change, run `pnpm lint` and `pnpm build`, then manually verify affected routes (`/`, `/projetos`, and `/contato`) in both responsive layouts and relevant color modes. If introducing tests, document the chosen framework and add a corresponding pnpm script.

## Commit & Pull Request Guidelines

Use concise Conventional Commit-style subjects matching the history: `feat:`, `fix:`, `chore:`, `docs:`, or `refactor:` (for example, `feat: add project card`). Keep commits focused. Pull requests should explain the user-visible change, list validation commands, link an issue when applicable, and include screenshots or a short recording for visual changes. Call out configuration, dependency, or deployment-impacting changes explicitly.
