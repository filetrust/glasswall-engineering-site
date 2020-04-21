# Glasswall Engineering Documentation Site

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

[![Build Status](https://dev.azure.com/glasswall/Glasswall%20Cloud/_apis/build/status/Glasswall.Engineering.Site/filetrust.glasswall-engineering-site?branchName=master)](https://dev.azure.com/glasswall/Glasswall%20Cloud/_build/latest?definitionId=468&branchName=master)

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

There is an continuous delivery pipeline which you can see azure-cd-pipelines.yml. This runs in Azure pipelines which deploys the website to blob storage.

Every time an item is merged into master the pipeline automatically deploys

### Architecture 

The documentation website uses a simple blob static site with a CDN to improve content delivery. Please see the diagram to understand how content gets to our customers.

![Architecture](/readme-content/Engineering-Site.png)

### Modifying the site

Please use the [Docusarus Documentation](https://v2.docusaurus.io/docs/2.0.0-alpha.43/creating-pages) to see how best to add to the pages.
