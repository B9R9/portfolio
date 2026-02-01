# Portfolio

Personal portfolio site built with Vue 3, Vite, and Tailwind CSS v4.

## Overview

- Home page with sections (Hero, Projects, Values, Journey, Work Style, Skills, Contact)
- Project detail pages with rich content
- Filters (type + tags) and empty state
- i18n (FR, EN, FI, SV) via `vue-i18n`
- Clean UI, consistent typography, uniform project cards

## Stack

- Vue 3 + Vue Router
- Vite
- Tailwind CSS v4
- Vue I18n

## Installation

```sh
npm install
```

## Development

```sh
npm run dev
```

## Build

```sh
npm run build
```

## Lint

```sh
npm run lint
```

## Structure

- `src/components/sections/` : homepage sections
- `src/components/filters/` : reusable project filters
- `src/content/` : project data
- `src/i18n/` : translations

## Notes

- Translations are centralized in `src/i18n/locales/`.
- Project copy lives in `src/content/projects.ts`.
