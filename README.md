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
6. Edit the files in the [`src`](src) directory
7. Push your source changes to `main`. [GitHub Actions](https://docs.github.com/en/actions)
   builds the site and publishes the generated `.vitepress/dist` contents to `production`.

## Deployment

`main` contains the source files; `production` contains the generated site. Make
source changes on `main`, since deployment replaces the contents of `production`.

In the repository's **Settings → Pages**, select **Deploy from a branch**, choose
the `production` branch and the `/ (root)` folder, and save.
