# YoutubeLite

[![Documentation](https://img.shields.io/badge/docs-live-blue)](https://ashishsinghparihar.github.io/documentation/index.html)

YoutubeLite is a frontend-only learning project built with **Angular 18**, designed to explore best practices in modern frontend development, testing, and tooling.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Tech Stack & Tooling

This project is powered by a modern frontend ecosystem and integrates several quality assurance and developer tooling configurations:

- **Angular 18** – The latest version of Angular for building high-performance, scalable single-page applications using standalone components and improved testing APIs.
- **ESLint** – Linter configured using `eslint.config.mjs` for enforcing consistent code quality and best practices. Includes Angular-specific and TypeScript rules.
- **Karma** – Configured in `karma.conf.js` to ensure a minimum of **90% test coverage** across statements, branches, functions, and lines. Reports are generated in HTML, LCOV, and summary formats.
- **Husky Git Hooks** – Enforces CI/CD-like checks before commits and pushes:
  - `commit-msg` – Validates the format of commit messages to ensure consistency.
  - `pre-commit` – Automatically runs Prettier and ESLint via lint-staged for staged files.
  - `pre-push` – Executes unit tests, checks for test coverage and builds code before pushing to repository. Push is blocked if coverage is below threshold or tests fail.
- **lint-staged** – Optimizes linting to only staged files, improving pre-commit performance.
- **Prettier** – Formatter integrated with `.prettierrc` and `.prettierignore` to maintain consistent code styling.
- **CompoDoc** – Documentation tool for generating a live, navigable UI documentation site from Angular components and services.

## Running unit tests

Execute the unit tests via [Karma](https://karma-runner.github.io).

### Watch Mode + Browser Report

```bash
npm run test
```

- Launches in **Chrome**
- Opens browser with live Karma test results

### Headless Mode with Coverage

```bash
npm run test:no-watch
```

- Uses **ChromeHeadless**
- Generates code coverage report
- Coverage thresholds:
  - Statements: `>=90%`
  - Branches: `>=90%`
  - Functions: `>=90%`
  - Lines: `>=90%`

## Linting

```bash
npm run lint
```

### Linting using ESLInt

```bash
npm run eslint
```

- Uses `eslint.config.mjs`
- Ignores: `dist/`, `coverage/`, `documentation/` and other unnecessary files

### Staged File Linting

Configured via `.lintstagedrc` and triggered by Husky on `pre-commit`.

## Formatting

```bash
npm run format
```

- Uses Prettier
- Configured with `.prettierrc` and `.prettierignore`

## Git Hooks (via Husky)

| Hook         | Action                                                                   |
| ------------ | ------------------------------------------------------------------------ |
| `commit-msg` | Validates commit message format                                          |
| `pre-commit` | Runs ESLint + Prettier via lint-staged                                   |
| `pre-push`   | Runs `test:no-watch` + `ng build` and blocks push if tests/coverage fail |

## Development Server

```bash
ng serve
```

Navigate to: [http://localhost:4200](http://localhost:4200)

## Build

```bash
ng build
```

Output is saved to the `dist/` directory.

## Live Documentation

Auto-generated using **CompoDoc** and deployed on **GitHub Pages**
📖 [Live Docs](https://ashishsinghparihar.github.io/documentation/index.html)

Generate locally:

```bash
npm run docs:build
```

## Help

Run:

```bash
ng help
```

Or refer to the [Angular CLI Documentation](https://angular.dev/tools/cli)
