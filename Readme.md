# Astro Deploy Starter

## How to use this template

```sh
git clone https://github.com/deployn/astro-deploy new-astro-project
cd new-astro-project
```

Development Server:

```sh
npm i -g pnpm
pnpm install
pnpm dev
```

Production Build:

```sh
sudo docker build -t astro-deploy .
docker run -d -p 1234:80 astro-deploy
```

## Features

- 🚀 Astro.js 4
- 🐳 Docker integration

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
| `pnpm run commit`          | Commits changes to version control               |
