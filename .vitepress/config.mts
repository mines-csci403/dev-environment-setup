/**
 * @file VitePress configuration
 * @see https://vitepress.dev/reference/site-config
 */

import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";
import {defineConfig} from "vitepress";
import lightbox from "vitepress-plugin-lightbox";

const __filename = fileURLToPath(import.meta.url),
  __dirname = dirname(__filename),
  root = join(__dirname, "..");

export default defineConfig({
  cleanUrls: true,
  description: "CSCI403: Database Management at the Colorado School of Mines",
  dir: join(root, "src"),
  head: [
    [
      "link",
      {
        href: "/logos/mines-reuleaux-light.png",
        media: "(prefers-color-scheme: no-preference)",
        rel: "icon",
      },
    ],
    [
      "link",
      {
        href: "/logos/mines-reuleaux-light.png",
        media: "(prefers-color-scheme: light)",
        rel: "icon",
      },
    ],
    [
      "link",
      {
        href: "/logos/mines-reuleaux-dark.png",
        media: "(prefers-color-scheme: dark)",
        rel: "icon",
      },
    ],
  ],
  markdown: {
    config: md => {
      md.use(lightbox);
    },
    math: true,
    toc: {
      level: [1, 2, 3],
    },
  },
  sitemap: {
    hostname: "https://csci-442-mines.github.io",
  },
  srcDir: join(root, "src"),
  themeConfig: {
    aside: true,
    editLink: {
      pattern:
        "https://github.com/csci-442-mines/csci-442-mines.github.io/edit/main/src/:path",
    },
    footer: {
      copyright: "&copy; " + new Date().getFullYear() + " Colorado School of Mines",
    },
    lastUpdated: {},
    nav: [
      {link: "/", text: "Home"},
      {link: "/student-environment", text: "Student Environment"},
    ],
    outline: {
      level: [1, 3],
    },
    search: {
      provider: "local",
    },
    sidebar: [
      {
        link: "/student-environment",
        text: "Student Environment",
      },
    ],
    socialLinks: [
    ],
  },
  title: "CSCI403: Database Management",
});
