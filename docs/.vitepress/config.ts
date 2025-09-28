import { defineConfig } from "vitepress";

const docBase = process.env.DOCS_BASE ?? "/";
const normalizedBase = docBase.endsWith("/") ? docBase : `${docBase}/`;

export default defineConfig({
  lang: "ja-JP",
  title: "VibeCoding Manual",
  description: "vibecodingの基本方針と運用フローを体系化したドキュメント",
  base: normalizedBase,
  lastUpdated: true,
  cleanUrls: true,
  appearance: "auto",
  head: [
    ["meta", { name: "theme-color", content: "#0ea5e9" }],
    ["link", { rel: "icon", href: `${normalizedBase}favicon.ico` }]
  ],
  themeConfig: {
    logo: `${normalizedBase}logo.svg`,
    nav: [
      { text: "概要", link: "/guide/intro" },
      { text: "スタイル", link: "/guide/style-guide" },
      { text: "リファレンス", link: "/guide/reference" }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "入門",
          items: [
            { text: "vibecodingとは", link: "/guide/intro" },
            { text: "マニュアルの読み方", link: "/guide/how-to-use" }
          ]
        },
        {
          text: "実践",
          items: [
            { text: "コーディングスタイル", link: "/guide/style-guide" },
            { text: "レビューとフィードバック", link: "/guide/review" },
            { text: "FAQ", link: "/guide/faq" }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/your-account/your-repo" }
    ],
    footer: {
      message: "vibecoding manual",
      copyright: "© " + new Date().getFullYear() + " VibeCoding" 
    }
  }
});
