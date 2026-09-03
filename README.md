# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

Available scripts:

```sh
npm run dev      # local dev server (http://localhost:8080)
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # eslint
npm run format   # prettier
```

## Built with

- TanStack Start (file-based routing, SSR)
- TypeScript + React 19
- Tailwind CSS v4 (CSS-first config)
- shadcn/ui + lucide-react

## Project structure

```
src/
  assets/            Art-directed imagery (ES6-imported)
  components/
    layout/          Shell: header, footer, container, section, wordmark
    sections/        Page sections (hero, services, work, process, ...)
    ui/              shadcn/ui primitives + Reveal (scroll animation)
  content/           EDITABLE CONTENT — site.ts, home.ts
  lib/               i18n scaffolding, utils
  routes/            One file per URL: index, about, services, work, contact
  styles.css         Design system (tokens, utilities)
```

## Where to edit content

All reusable copy lives in `src/content/`, never inside components:

- `src/content/site.ts` — brand name, tagline, navigation, CTAs, contact
  details, social links, legal links.
- `src/content/home.ts` — hero, trust signals, philosophy, services,
  featured projects, process steps, testimonials, final CTA.

Change a nav item, a service or a project there and every page updates.

## Styling approach

Tailwind v4 is configured entirely in `src/styles.css` — there is no
`tailwind.config.js`. Colours are `oklch` semantic tokens (`--ink`,
`--bone`, `--sand`, `--clay`, plus the shadcn set) registered under
`@theme inline`. Never hard-code colours in components; add a token
instead. Custom utilities (`display`, `eyebrow`, `hairline`,
`link-underline`, `reveal`) are declared with `@utility`.

Button styling for this brand lives in the `ink` / `clay` / `quiet`
variants in `src/components/ui/button.tsx`.

## Multilingual (EN / AR / DE) readiness

`src/lib/i18n.ts` defines the locale list, direction helper and the
migration path. Content is already isolated in `src/content/`, and layout
uses logical CSS properties (`ms-`, `me-`, `ps-`, `pe-`, `text-start`,
`inset-inline-*`), so switching `dir="rtl"` on `<html>` in
`src/routes/__root.tsx` flips the layout without markup changes.

## Notes

- The contact form is a placeholder: it validates and shows a toast but
  does not send. Wire it to a backend or email service in
  `src/routes/contact.tsx`.
- Imagery in `src/assets/` is placeholder art direction — replace with
  real photography at the same aspect ratios.

