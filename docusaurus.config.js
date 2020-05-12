module.exports = {
  title: "Glasswall Engineering",
  tagline: "Trust every file",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Glasswall", // Usually your GitHub org/user name.
  projectName: "Glasswall Engineering", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Glasswall Engineering",
      logo: {
        alt: "Glasswall Logo",
        src: "img/glasswall_logo_blue.png",
      },
      links: [
        {
          to: "docs/documentation-and-guides",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        {
          href: "https://medium.com/glasswall-engineering",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/filetrust",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/glasswall",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/filetrust",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/glasswallglobal",
            },
			           {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/glasswall-solutions-limited/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Glasswall Solutions Ltd. Built with Docusaurus.`,
    },
    gtag: {
      trackingID: 'UA-165717322-1'
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
