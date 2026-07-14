# volto-eea-design-system

[![Releases](https://img.shields.io/github/v/release/eea/volto-eea-design-system)](https://github.com/eea/volto-eea-design-system/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-eea-design-system%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-eea-design-system/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-eea-design-system%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-eea-design-system/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system&branch=develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system&branch=develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system&branch=develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system&branch=develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system&branch=develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system&branch=develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-eea-design-system&branch=develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-eea-design-system&branch=develop)


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

## Getting started

### Try volto-eea-design-system with Docker

      git clone https://github.com/eea/volto-eea-design-system.git
      cd volto-eea-design-system
      make
      make start

Go to http://localhost:3000

`make start` now defaults to Volto 18. To run the same setup against Volto 17, use:

      VOLTO_VERSION=17 make
      VOLTO_VERSION=17 make start

### Add volto-eea-design-system to your Volto project

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

   For a legacy Volto 17 project, install the package with `yarn` and restart the frontend as usual.

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-eea-design-system/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-eea-design-system/blob/master/DEVELOP.md).

## Secret Scanning

This repository uses the Betterleaks GitHub Action to scan the current
repository content on every push and pull request. The scan uses the rules in
`.gitleaks.toml` and uploads a `betterleaks-report` artifact when a finding is
detected.

If the optional SMTP secrets are configured, failed scans also send an email to
the last commit committer. The workflow expects these repository or
organization secrets:

- `SMTP_URL`
- `SMTP_PORT` (optional, defaults to `25`)
- `SMTP_EMAIL`
- `SMTP_PASSWORD` (optional if the SMTP server does not require authentication)

Port `465` is sent with direct TLS; other ports use the default SMTP handshake.
The email includes a short finding summary from the redacted Betterleaks report,
including the redacted matched line from each finding.

There are three common outcomes:

1. **Everything is OK.** The `Betterleaks / Scan for secrets` check is green and
   no action is needed. Regular references to runtime values are OK, for example:

   ```js
   const tokenFromCookie = req.universalCookies.get('auth_token');
   ```

2. **A real secret was found.** The check is red and the workflow log asks you to
   download the `betterleaks-report` artifact. Open the artifact from the GitHub
   Actions run and check the reported file, line and rule. Remove the committed
   value, move it to the proper secret store, and rotate it if it was exposed.
   A report entry looks like this:

   ```json
   {
     "RuleID": "secret-literal-assignment",
     "File": "src/config.js",
     "StartLine": 12,
     "Secret": "[REDACTED]"
   }
   ```

3. **The finding is a false positive.** Keep the value only if it is clearly not
   sensitive, such as a test fixture, placeholder, or public example. Add
   `betterleaks:allow` on the same line and include a short explanation in the
   pull request.

   ```js
   const testPassword = 'admin'; //betterleaks:allow
   ```

   ```yaml
   password: "admin" #betterleaks:allow
   ```

Do not add `betterleaks:allow` to real credentials.

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-eea-design-system/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
