# Astro Deploy Starter

A custom Astro.js template

![Logo](./public/pwa-512x512.png)

## Features

- 🚀 Astro.js 4 for modern web development.
- 🐳 Docker integration for consistent environments and easy deployment.
- 🍃 Tailwind CSS for utility-first styling and rapid UI development.
- ⚛️ React.js integration, enabling complex UI construction with ease.
- 🏔️ Alpine.js integration, bringing reactive and declarative magic to your markup.
- 📘 TypeScript support for safer code through static typing.
- 🖊️ MDX Blog, allowing JSX in markdown for interactive and dynamic content.
- 📄 Pagination for easier navigation through content.
- 🔍 Pagefind for quick and efficient search functionality within the project.
- 🔖 Frontmatter CMS for easy content management.
- 🐇 Directus CMS support, providing a headless CMS for flexible content management.
- ✒️ Expressive Code Blocks, enhancing readability and maintainability of code snippets.
- 🌓 Dark Mode support, offering seamless user experience between light and dark themes.
- 🌟 View Transitions, ensuring smooth navigation and enhanced user experience.
- 🛠 Custom Nginx Configuration, enabling advanced hosting and performance optimizations.
- 🎨 Shadcn/UI support for crafting beautiful, interactive UI components easily.
- 🗺 Dynamic Sitemap Generation, boosting SEO by ensuring all pages are discoverable.
- 📱 PWA Assets Generation for an app-like experience on mobile devices, including offline support.
- 💅 Prettier integration for consistent code formatting, ensuring a uniform coding style across the project.

## Prerequisites

- Node.js (version 20 recommended)
- Docker (for deployment)

## Getting Started with This Template

```sh
git clone https://github.com/deployn/astro-deploy new-astro-project
cd new-astro-project
```

To personalize:

- Replace `/public/logo.svg`
- Update `/public/site.webmanifest`
- Configure `astro.config.mjs`
- Customize colors in `tailwind.config.mjs`
- Modify content in `/src/\*` as needed

### Opting Out of Directus

If not using Directus CMS:

- Remove `/src/lib/directus.ts` and `/src/pages/recipes.astro`
- Run `pnpm remove @directus/sdk`

For Directus usage, ensure public view permission for necessary collections and `directus_fields` via the Directus dashboard and adjust `/src/lib/directus.ts` accordingly.

### Add shadcn/ui components

Visit <https://ui.shadcn.com/docs/> for component documentation and the list of components

```sh
pnpm dlx shadcn-ui@latest add componentName
```

## Development & Deployment

### Start the Development Server

```sh
npm i -g pnpm
pnpm install
pnpm dev
```

### Production Build & Run

```sh
sudo docker build . --build-arg SITE_URL=https://example.com --build-arg DIRECTUS_URL=https://example.directus.com -t astro-deploy
docker run -d -p 1234:80 astro-deploy
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
| `pnpm run upgrade`         | Upgrade dependencies interactively               |
| `pnpm run format`          | Formats codebase using Prettier                  |
| `pnpm run commit`          | Commits changes to version control               |

## Acknowledgements & Resources

This project draws inspiration and knowledge from a wide array of sources:

- [Astro.js Basic Example](https://github.com/withastro/astro/tree/main/examples/basics)
- [Astro.js Docs](https://docs.astro.build/)
- [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus)
- [Astro Starter Kit](https://github.com/zankhq/astro-starter)
- [Directus](https://directus.io/)
- [Docker](https://www.docker.com/)
- [Frontmatter CMS](https://frontmatter.codes/)
- [Material-Tailwind](https://www.material-tailwind.com/)
- [nginx](https://www.nginx.com/)
- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)
- [Prettier](https://prettier.io/)
- [Radix UI](https://www.radix-ui.com/)
- [React](https://react.dev/)
- [shadcn/ui Docs](https://ui.shadcn.com/docs)
- [Tailkit](https://tailkit.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/)
- [Typescipt](https://www.typescriptlang.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Contributing

Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue.
Don't forget to give the project a star! Thanks again!

## Demo

Live Demo: [Astro Deploy](https://astro.deployn.de)
