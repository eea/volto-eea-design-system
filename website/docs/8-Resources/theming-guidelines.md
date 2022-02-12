## Theming best practices

### Use variables everywhere is possible:
- Make use of already added styles and override variables instead of adding overrides:

  https://github.com/Semantic-Org/Semantic-UI/blob/master/src/definitions/elements/button.less
  https://github.com/eea/volto-eea-design-system/blob/develop-itml/theme/themes/eea/elements/button.variables
- Introduce new variables if needed for presentational styles, some examples include:
  - border
  - padding
  - margin
  - color
  - background
  - box-shadow
  - font-size
  - width
  - height
  - display
  - position
  - alignment
  - text decoration

- Use variables also for link and buttons states, ex: 
  - focus
  - hover
  - active
 
  We will provide a `primary` button blue but perhaps
  another eea website will have green with border
  as `primary` style, having a design system that allows this customization through variables ensures that the design is flexible without adding extra css
- If there aren't any, and you need to use media queries, define variables for media queries, ex:
  ```
  @buttonTabletBreakpoint: @tabletBreakpoint;
  ```
  This way another design might choose to use a different breakpoint from the usual breakpoints
- If new variables are introduced opt to use functionality naming instead of using color naming, ex:

  ``` 
  ui primary button vs blue button
  ```
  
### Remove or customize overrides:
- Delete overrides that modified variables, introduce override only when style is hard-coded:

  https://github.com/eea/volto-eea-design-system/blob/develop-itml/theme/themes/eea/elements/button.overrides

### Don't add html tags to the css specificity selector:

- If we have:
  ```css
  .ui.button.basic
  ```
  Avoid adding:
  ```css
  button.ui.button.basic
  table.ui.plain
  ```
  Instead opt for variable overrides or add extra classes:
  ```css
  .ui.table.eea-table-plain {
    tag: style
  }
  ```

### Add custom classes after the semantic ui classes

- Wrong:
```less
.ui.eea-button-action.button {}
```

- Right:
```less
.ui.button.eea-button-action {}
```

### Use Semantic UI naming style
If you introduce a new variant of a Semantic UI component, ex new button variant:
- Wrong:
```less
.ui.button.eea-button-action {}
```
- Right:
```less
.ui.button.action {}
```

If you add a new non-Semantic UI component:

- Wrong:
```css
.eea-header {}
.eea-header-action {}
```
- Right:
```css
.eea.header {}
.eea.header .action {}
```

### Use relative units in general

Gutters/spacing are now measured using px instead of rem.
SemanticUI uses rem.

So if designer set 20px, it must be transformed to rem units, by taking the base font-size of 16px then we get 20/16 = 1,25rem.

So that if in the future we change the base font-size the gutters / spacing will also adjust. 
- Wrong:
```less
@gutterWidth: 20px;
```

- Right:
```less
@gutterWidth: 2rem;
```

### Think globally, act locally
If you have a section that is repeated in several components consider introducing a global variable that will be a default for all the components where that section is present.  
Ex:
A 


