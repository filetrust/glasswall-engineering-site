module.exports = {
  title: "Glasswall Engineering",
  tagline: "Trust Every File",
  url: "https://filetrust.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "filetrust", // Usually your GitHub org/user name.
  projectName: "glasswall-engineering-site", // Usually your repo name.
  onBrokenLinks: 'log',
  themeConfig: {
    navbar: {
      title: "Glasswall Engineering",
      logo: {
        alt: "Glasswall Logo",
        src: "img/glasswall_logo_blue.png"        
      },
      items: [
        {
          to: "docs/product-descriptions/product-overview",
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
          to: "docs/careers/rules-of-engagement",
          activeBasePath: "docs/careers",
          label: "Careers",
          position: "left"
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
              to: "docs/products/cloud-sdk/rebuild/rebuild-quickstart",
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
