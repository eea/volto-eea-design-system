# @eeacms/volto-eea-design-system

[![Releases](https://img.shields.io/github/v/release/eea/volto-eea-design-system)](https://github.com/eea/volto-eea-design-system/releases)
[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-eea-design-system%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-eea-design-system/job/master/display/redirect)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system)

[Volto](https://github.com/plone/volto) EEA Design System

## Features

This package provides the following features:

1. A Semantic UI theme
2. A repository for the design system source files and mockups
3. A website to showcase the design system

## Upgrade

- Version `^1.60.0` requires `^eea.volto.policy@12.0` to allow customizing the header search box.

### Try the design system website

Checkout the docs found within the [website](https://github.com/eea/volto-eea-design-system/blob/develop/website/README.md) folder

### Try the design system mockups

Checkout the docs found within the [mockups](https://github.com/eea/volto-eea-design-system/blob/figma_mockups/mockups/README.md) folder from the `figma_mockups` branch.

> [!NOTE]
We moved the mockups to a separate branch to avoid bloating the main branch with large files.

## Docusaurus and Storybook

See [Docusaurus](https://eea.github.io/).
See [Storybook](https://eea.github.io/eea-storybook/).

## Requirements

### Backend

- [Plone](https://plone.org/download)
- [plone.restapi](https://pypi.org/project/plone.restapi/)

### Frontend

- Volto: `@plone/volto >=18.0.0 <20.0.0`
- Node.js: `>=22.0.0`

## Installation

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "dependencies": {
       "@eeacms/volto-eea-design-system": "*"
   }
   ```

   and `volto.config.js`:

   ```JavaScript
   const addons = ['@eeacms/volto-eea-design-system'];
   ```

* If not, create one with Cookieplone, as recommended by the official Plone documentation for Volto 18+:

   ```
   uvx cookieplone project
   cd project-title
   ```

1. Install or update dependencies, then start the project:

   ```
   make install
   ```

   For a Cookieplone project, start the backend and frontend in separate terminals:

   ```
   make backend-start
   make frontend-start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## License

See [LICENSE.md](LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
