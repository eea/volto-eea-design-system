# volto-eea-design-system

[![Releases](https://img.shields.io/github/v/release/eea/volto-eea-design-system)](https://github.com/eea/volto-eea-design-system/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-eea-design-system%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-eea-design-system/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-eea-design-system%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-eea-design-system/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system-develop)


[Volto](https://github.com/plone/volto) EEA Design System

## Features

This package provides the following features:

1. A Semantic UI theme
2. A repository for the design system source files and mockups
3. A website to showcase the design system

## Getting started

### Add volto-eea-design-system to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

1. Start Volto frontend

- If you already have a volto project, just update `package.json`:

  ```JSON
  "addons": [
      "@eeacms/volto-eea-design-system"
  ],

  "dependencies": {
      "@eeacms/volto-eea-design-system": "^1.0.0"
  }
  ```

- If not, create one:

  ```
  npm install -g yo @plone/generator-volto
  yo @plone/volto my-volto-project --addon @eeacms/volto-eea-design-system
  cd my-volto-project
  ```

1. Install the new add-ons by updating `package.json` and restart Volto:

   ```
   yarn
   yarn start
   ```

2. Go to http://localhost:3000

3. Happy editing!

### Try the design system website

Checkout the docs found within the [website](https://github.com/eea/volto-eea-design-system/blob/develop/website/README.md) folder

### Try the design system mockups

Checkout the docs found within the [mockups](https://github.com/eea/volto-eea-design-system/blob/develop/mockups/README.md) folder

## Release

See [RELEASE.md](https://github.com/eea/volto-eea-design-system/blob/master/RELEASE.md).

## Docusaurus and Storybook

See [Docusaurus](https://eea.github.io/).
See [Storybook](https://eea.github.io/eea-storybook/).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-eea-design-system/blob/develop/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-eea-design-system/blob/develop/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
