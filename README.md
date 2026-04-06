# Rasil Website

Public-facing marketing website for Rasil, built with SvelteKit, Tailwind CSS, TypeScript, and Bun-oriented scripts.

## Stack

- SvelteKit 2
- Svelte 5
- Tailwind CSS 4
- TypeScript
- Bun for install and script execution

## Local development

```sh
bun install
bun run dev
```

The local dev server runs through Vite.

## Production build

```sh
bun run build
bun run preview
```

## Structure

- `src/routes` contains the marketing pages
- `src/lib/components` contains reusable UI sections
- `src/lib/content/marketing.ts` centralizes product copy and content blocks
- `src/lib/site.ts` stores shared site metadata, nav items, and canonical URL settings
- `static/brand` contains the provided Rasil logo assets used by the site

## Before launch

- Update the canonical site URL in `src/lib/site.ts`
- Replace the placeholder contact email in `src/lib/site.ts`
- Review the placeholder legal copy in `/privacy` and `/terms`

## Deployment

This project is designed to be deployed on Vercel. Once the repository is connected, a standard SvelteKit build is enough for preview and production deployments.
