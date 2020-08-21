# Glasswall Engineering Documentation Site

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

[![Build Status](https://dev.azure.com/glasswall/Glasswall%20Cloud/_apis/build/status/Glasswall.Engineering.Site/filetrust.glasswall-engineering-site?branchName=master)](https://dev.azure.com/glasswall/Glasswall%20Cloud/_build/latest?definitionId=468&branchName=master)

### Yarn
```
npm install -g yarn
```

This command will install the Yarn package manager. Yarn is used to build the project in the deployment pipeline.

### Installation
```
yarn install
```

### Local Development

```
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


### Deployment

There is an continuous delivery pipeline which you can see azure-cd-pipelines.yml. This runs in Azure pipelines which deploys the website to blob storage.

Every time an item is merged into master the pipeline automatically deploys

### Architecture 

The documentation website uses a simple blob static site with a CDN to improve content delivery. Please see the diagram to understand how content gets to our customers.

![Architecture](/readme-content/Engineering-Site.png) 

### Modifying the site

Please use the [Docusaurus Creating Pages Documentation](https://v2.docusaurus.io/docs/2.0.0-alpha.43/creating-pages) to see how best to add to the pages.

When adding Markdown documentation the [Docusaurus Markdown Features](https://v2.docusaurus.io/docs/2.0.0-alpha.43/markdown-features) provides a full description. To add references to the Markdown the sidebar needs to be updated. [Docusaurus Sidebar](https://v2.docusaurus.io/docs/2.0.0-alpha.43/sidebar) documents how this is structured.

#### Glasswall notes
Docusaurus uses a header in each Markdown file to specify the metadata for that page. The [Markdown Header](/https://v2.docusaurus.io/docs/2.0.0-alpha.43/markdown-features#markdown-headers) is enclosed with a line ```---``` above and below it.

![Markdown Header Example](/readme-content/markdown-header-example.png)

Each Markdown document in the engineering Site should be identifiable through its file name (this is used as the file id if none is specified within the file itself).

Each Markdown document should have a ```title``` specified in its header section.
Where an alternative heading is required to be used in the sidebar, then a ```sidebar_label``` should be specified in the document header.

