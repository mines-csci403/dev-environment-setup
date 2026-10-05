# CSCI403: Database Management Course Website

This is the course website for CSCI403: Database Management at the
[Colorado School of Mines](https://mines.edu).

## Development Documentation

1. Install [NodeJS](https://nodejs.org/en/download/)
2. Clone this repository
3. Install dependencies:
   ```shell
   npm install
   ```
4. Start the development server:
   ```shell
   npm run dev
   ```
5. Go to the URL the development server prints (usually `http://localhost:5173`)
6. Edit the files in the [`docs`](docs) directory
7. Push your source changes to `production`. GitHub Actions builds the site and
   deploys the generated `.vitepress/dist` contents to GitHub Pages.

## Deployment

In the repository's **Settings → Pages → Build and deployment**, set **Source**
to **GitHub Actions**. Do not select a branch or `/docs` for Jekyll to build:
`docs` contains VitePress source files that must first be compiled.

The `gh-pages.yml` workflow installs dependencies from the repository root,
runs `npm run build`, and deploys `.vitepress/dist`. It runs on relevant pushes
to `production`, or manually from the Actions tab. The `production` branch
contains source files; deployment uploads the generated site as an artifact.

The site is hosted at <https://mines-csci403.github.io/dev-environment-setup/>.
VitePress's `base` must stay `/dev-environment-setup/` so navigation, scripts,
styles, and images resolve under this project URL.

To verify a build locally, run `npm run build`, then `npm run preview`.
