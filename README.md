# Felix Htoo Portfolio

Static portfolio built with Astro and React islands.

## Commands

```sh
corepack enable
pnpm install
pnpm dev
pnpm build
pnpm preview
```

Astro renders portfolio content as static HTML for SEO and performance. React is
used only for interactive components such as the responsive navigation, GSAP
animations, and resume printing.

The site deploys to GitHub Pages through
`.github/workflows/deploy.yml` when changes reach the `master` branch.
