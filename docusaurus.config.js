// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const whiteLogo = "img/barikoi-logo-white.svg";
const blackLogo = "img/barikoi-logo-black.svg";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BariKoi Documentation",
  tagline: "Maps for Businesses",
  favicon: "img/barikoi-logo.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: "./src/barikoi_api.yaml",
            route: "/api/",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#4E9F3D",
        },
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "pricing",
        path: "pricing",
        routeBasePath: "pricing",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: `${lightCodeTheme}?${blackLogo}:${whiteLogo}`,
      navbar: {
        title: "",
        logo: {
          alt: "BariKoi Logo",
          src: blackLogo,
          srcDark: whiteLogo,
        },
        items: [
          { to: "/api", label: "API", position: "left" },
          { to: "/docs/maps-api", label: "Maps API", position: "left" },
          {
            to: "/blog/android-location-library",
            label: "Android Location Library",
            position: "left",
          },

          {
            to: "/pricing/maps-api", // ./docs-api/Intro.md
            label: "Pricing",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Barikoi Technologies Limited`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
module.exports = config;
