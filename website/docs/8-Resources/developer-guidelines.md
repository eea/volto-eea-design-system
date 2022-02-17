---
title: Developer Guidelines
description: Several rules and guidelines for developers of the EEA Design System
hide_table_of_contents: false
---

# Developer Guidelines

In drafting the EEA Design System Developer's Guidelines, we have the following
qualities as desirable aspects for the code we produce:

- **maintainability**. As a long lived software library, intended to be reused
  across many EEA websites, the code should promote maintainability as one
  primary aspect. This implies **clean**, **simple**, **consistent** with the
  underlying Semantic-UI CSS library that we use and the rest of frameworks
  where that will integrate the EEA Design Systems (Volto, in particular).

- **flexibility**. A fine balance needs to be maintained between too many
  configuration options and not enough flexibility which prevents components
  from being reused. We aim to make components flexible, as to promote their
  reusability

- **framework independent**. To avoid complications, the EEA Design System CSS
  and React components should be developed independently of their final
  integration system. The aim is to simplify reimplementation or porting to
  other systems.

- **consistent with Semantic-UI ecosystem**. By following similar development
  patterns and conventions as the semantic-ui-less and the semantic-ui-react
  libraries use, we ensure that we promote an intuitive approach to development
  and maintenance for the developers experienced with EEA systems.

- **prevent technical debt**. Use best-practices, avoid hard coded and
  spaghetti code. Limit exposure to other third-party dependencies.
  Refactoring, if needed, should be prioritized as to avoid duplication of
  work.

Developers working on the EEA Design System should strive to follow the
following practical guidelines.

## React components

### Basic Rules

- One React component per file. Use JSX syntax.
- Use [Volto's eslint
  configuration](https://github.com/plone/volto/blob/master/.eslintrc) for
  linting and Prettier integration
- Use best practice naming conventions, follow the closed library style
  (semantic-ui-less, semantic-ui-react).
- Configure editor to use Unix line endings (a must!).

### Naming

- Use .jsx extension for React components
- Filename: Use PascalCase for filenames. E.g., ItemCard.jsx. [Bad example][2]
- Variable naming: Use PascalCase for React components and camelCase for their
  instances.
- Component Naming: Use the filename as the component name. For example,
  ReservationCard.jsx should have a reference name of ReservationCard. However,
  for root components of a directory, use index.jsx as the filename and use the
  directory name as the component name.
- Use camelCase for prop names, or PascalCase if the prop value is a React component.

### Other

- Make components generic and flexible. Don't hardcode values, make them props.
- Avoid using inline styles. Inline styles can be used in special cases in case
  the style is derived from properties, for example setting background images
  or visibility of elements.
- Don't place components inside `src/customizations`. That's a special Volto
  location. Components should be worked on in `src/components`. Only components
  that override builtin Volto components need to be placed in
  src/customizations. EDW will do that when we make the integration with Volto.
- Don't use long relative paths for imports. This rule also applies to .stories
  files. [Bad example][1].
  Use imports relative to the package name, ex:

```
import someImage from '@eeacms/volto-eea-design-system/../theme/assets/someFile.png';
```

- Don't namespace component names. Just use their simple functional name.
  AccordionEEA becomes Accordion. In our code, if we have conflicting imports,
  we can do aliasing `import { Accordion as AccordionEEA } from '...'`.
  [Bad example][3]
- Use whitespace to separate and group imports from other code (for example
  component declarations). [Bad example][4]
- Don't work on components integrated with Volto. Make components basic and
  flexible so that they are ready to be integrated with Volto. [Bad example][5]
- Subcomponents. Large composite components (for example the Footer) should be
  abstracted and split into multiple
  [subcomponents](https://react.semantic-ui.com/#sub-components). See the
  SemanticUI Card or Modal as example. The Footer could be implemented as
  `Footer` as wrapper component, `Footer.Section` etc.

## Storybook

- Place stories next to components
- Aim for realistic demo aspects, For example, a mix
  of short and long text. To properly understand the card component, we need to
  know if its height is fixed, what happens when placed next to another
  component, what the spacing between multiple cards are, etc.
- Variations should be provided as separate stories.
- Aim for a comprehensive but realistic set of control options. While we treat
  Semantic-UI as the basic building block, the EEA Design System should provide
  guidelines as to what combinations of props and variations are allowed,
  to ensure a consistent look and feel. One place to document these constraints
  is in the control options we have in Storybook.


[1]: https://github.com/eea/volto-eea-design-system/blob/40f78e362ca607ef3893fff3d03c8ed1b4447c11/src/customizations/components/theme/Logo/Logo.jsx#L13
[2]: https://github.com/eea/volto-eea-design-system/blob/40f78e362ca607ef3893fff3d03c8ed1b4447c11/src/customizations/components/theme/Footer/theme-sites.js
[3]: https://github.com/eea/volto-eea-design-system/blob/40f78e362ca607ef3893fff3d03c8ed1b4447c11/src/customizations/components/theme/Accordion/Accordion.js#L4
[4]: https://github.com/eea/volto-eea-design-system/blob/40f78e362ca607ef3893fff3d03c8ed1b4447c11/src/customizations/components/theme/Comment/Comment.js#L3-L4
[5]: https://github.com/eea/volto-eea-design-system/blob/40f78e362ca607ef3893fff3d03c8ed1b4447c11/src/customizations/components/theme/Navigation/Navigation.jsx
