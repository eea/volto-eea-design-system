---
name: Feature request
about: Suggest an idea for this project
title: ''
labels: ''
assignees: ''

---

## React guidelines
### Basic guidelines
- [ ] One React component per file
- [ ]  Use best practice naming conventions, follow the library styles (semantic-ui-less, semantic-ui-react).
- [ ] Ensure every file uses Unix line endings

### Naming guidelines
- [ ] Filename: Use PascalCase for filenames. E.g., ItemCard.jsx
- [ ]  Variable naming: Use PascalCase for React components and camelCase for their instances
- [ ] Use the filename as the component name, ReservationCard.jsx should have a reference name of ReservationCard
- [ ] Use camelCase for prop names, or PascalCase if the prop value is a React component

### Component best practice guidelines
- [ ] Don't hard-code values, make them props
- [ ] Avoid using inline styles except for setting background images or visibility of elements
- [ ] Use imports relative to the package name
- [ ] Use whitespace to separate and group imports from other code
- [ ] Large composite components (for example the Footer) should be abstracted and split into multiple subcomponents

### Storybook best practice guidelines
- [ ] Aim for realistic demo aspects, For example, a mix of short and long text.
- [ ] Variations should be provided as separate stories
- [ ] Aim for a comprehensive but realistic set of control options
- [ ] Provide guidelines as to what combinations of props and variations are allowed

## Theming guidelines
- [ ] Style directly the SUI components without introducing new markup or classes
- [ ] Use variables everywhere it is possible
- [ ] Remove or modify overrides to use variables instead of hard-coded values 
- [ ] Don't add HTML tags to the css specificity selector
- [ ] Add custom classes after the semantic ui classes
- [ ] Use Semantic UI naming style
- [ ] Keep important rules to a minimum and make sure they are well documented
- [ ] Use relative units in general
- [ ] Check components design when having odd numbers or images
- [ ] Check components with every responsive design preview sizes both in landscape and portrait
