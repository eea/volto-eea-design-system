# volto-eea-design-system
[![Releases](https://img.shields.io/github/v/release/eea/volto-eea-design-system)](https://github.com/eea/volto-eea-design-system/releases)
[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-eea-design-system%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-eea-design-system/job/master/display/redirect)
[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-eea-design-system%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-eea-design-system/job/develop/display/redirect)

[Volto](https://github.com/plone/volto) add-on

## Features

This package provides the following features:

1. A Semantic UI theme
2. A repository for the design system source files and mockups
3. A website to showcase the design system


## Getting started

### Try volto-eea-design-system with Docker

1. Get the latest Docker images

   ```
   docker pull plone
   docker pull plone/volto
   ```

2. Start Plone backend
   ```
   docker run -v $(pwd)/var:/data -e SITE=Plone -p 8080:8080 -e PROFILES="profile-plone.restapi:blocks" --name eea-plone -it --rm plone fg
   ```
3. Wait until you get the following message:
    ```
    Serving on http://0.0.0.0:8080
    ```

4. Start Volto frontend

   ```
   docker run -it --rm -p 3000:3000 --link eea-plone -e ADDONS="@eeacms/volto-eea-design-system" plone/volto
   ```
5. Wait until you get the following message:
     ```
    Volto started at http://localhost:8080 
    ```

6. Go to http://localhost:3000, login with admin:admin if you need to edit the site.

### Add volto-eea-design-system to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-eea-design-system"
   ],

   "dependencies": {
       "@eeacms/volto-eea-design-system": "^1.0.0"
   }
   ```

* If not, create one:

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

Checkout the docs found within the [website](https://github.com/eea/volto-eea-design-system/blob/master/website/README.md) folder

### Try the design system mockups

Checkout the docs found within the [mockups](https://github.com/eea/volto-eea-design-system/blob/master/mockups/README.md) folder

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-eea-design-system/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-eea-design-system/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
