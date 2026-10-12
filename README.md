# Milan Zítka — personal website

A static Astro website with native Astro components and small browser scripts for navigation and song lyrics.

## Getting started

Use Node.js 22.13 or newer in the 22.x series, or Node.js 24+, and [Moon](https://moonrepo.dev/docs/install).
The Moon version is pinned in `.prototools`; dependencies are managed by the workspace toolchain.

```sh
moon run web:install
moon run web:dev
```

The development server runs at http://localhost:4321.

## Build and verification

```sh
moon run web:verify
moon run web:preview
```

Verification runs type checking, linting, formatting checks, a production build and checks of all 16 Czech and English pages.
The site checks cover local links, images, audio files, metadata, global styles and the lyrics portfolio.

| Command | Purpose |
| --- | --- |
| `moon run web:build` | Generate the static site in `dist/` |
| `moon run web:typecheck` | Check Astro and TypeScript sources |
| `moon run web:test` | Build the site and check the generated pages |
| `moon run web:lint` | Run Oxlint, including type-aware rules |
| `moon run web:fmt` | Format source files with ESLint and CSS with Stylelint |
| `moon run web:fmt-check` | Check formatting without modifying files |
| `moon run web:verify` | Run all checks and build the site |

All project commands are defined in `moon.yml`. There are no package scripts.

## Linting and formatting

Shared configuration comes from `@dvdevcz/linters`:

- `oxlint.config.ts` uses the base preset for correctness and type-aware linting.
- `eslint.config.mjs` uses the formatting preset and the Astro parser for `.astro` sources.
- `stylelint.config.mjs` uses the base CSS preset for formatting and declaration ordering.

Generated files in `dist/`, `.astro/` and `.moon/` are excluded.
Oxlint checks script blocks in Astro files; Astro type checking covers page templates.

## Project structure

- `src/pages/`: Czech pages and English entry points under `en/` sharing the same templates.
- `src/layouts/Layout.astro`: fonts, metadata, canonical URLs and language alternatives.
- `src/translations/`: Czech and English strings; the URL determines the language.
- `src/components/`: navigation, portfolio, cards, footer and lyrics dialog.
- `src/data/texts/`: song lyrics.
- `src/data/lyrics.ts`: portfolio metadata and links to lyrics.
- `src/styles/global.css`: global styles.
- `public/`: versioned images, favicons and recordings copied into the build.
- `scripts/check-site.mjs`: production output checks.

Czech uses the original URLs; English uses the `/en/` prefix.
The audio player is bundled from `@lwdev/audio-player`.
Navigation uses a small script to toggle the mobile menu. The language switcher is an ordinary link.
Song lyrics are rendered into HTML templates and opened in a native `dialog` with keyboard support.
There are no UI framework dependencies or hydrated framework components.
Deploy the static contents of `dist/`.
