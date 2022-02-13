## Theming best practices

### Style directly the SUI components without introducing new markup or classes

Here is why we shouldn't introduce new markup to SUI components:

- Here is the generic markup defined by React Semantic UI documentation site
https://react.semantic-ui.com/modules/accordion/#types-standard
- Here is this component used within a package made by EEA:
https://github.com/eea/volto-accordion-block/blob/master/src/components/manage/Blocks/Accordion/View.jsx#L50

  When the theme is added, we expect for the normal `Accordion` component to look like it does now on the storybook
without any modification to the component in the individual packages.
 
Therefore, when theming the stock components do the following:

- Remove any extra html tag elements and stick to the normal component markup
- Remove any extra `eea classes`, style the component class directly unless we have a new `eea variant`
- Use the variables to modify the design of the component, use overrides only if styles are missing altogether, or
they are hard-coded
- If you add new styles, and they are presentational follow the convention of the semanticUI variables and name
them likewise

Ex:
```less
//if you have 
.styled.active.child {
  padding: 0;
}
// then add the value with a variable
@styledActiveChildPadding: 1rem;
// and use it 
.styled.active.child {
  padding: @styledActiveChildPadding;
}
```

### Use variables everywhere it is possible:
- Make use of already added styles and override `variables` instead of adding `overrides`:

  https://github.com/Semantic-Org/Semantic-UI/blob/master/src/definitions/elements/button.less
  https://github.com/eea/volto-eea-design-system/blob/develop-itml/theme/themes/eea/elements/button.variables
- Introduce new variables if needed for `presentational styles`; some examples include:
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
  - text-decoration

- Use variables also for link and buttons `states`, ex: 
  - focus
  - hover
  - active
 
  We will provide a `primary` button blue, but perhaps
  another EEA website will have `green` with a border
  as the `primary` style. 
  
  Having a design system that allows this level of customization through variables ensures that the design is flexible without adding any extra css to the final bundle.
- If there aren't any, and you need to use `media queries`, define `variables` for media queries, ex:
  ```less
  // button.variables
  @buttonTabletBreakpoint: @tabletBreakpoint;
  ```
  This way, another design might choose to use a different breakpoint from the usual breakpoints.
- If new variables are introduced, opt to use functionality naming instead of using color naming, ex:

  ```less
  // right
  .ui .primary .button {}
  // wrong
  .blue .button {}
  ```
  
### Remove or customize overrides
Delete overrides that modified variables, introduce overrides only when the style is hard-coded:

  https://github.com/eea/volto-eea-design-system/blob/develop-itml/theme/themes/eea/elements/button.overrides
 
### Ensure that text is a minimum of 16px
Except for `.small` or `.tiny` classes that make text small, we need to ensure that it is legible any time we have text by making it `16px or more`.

### Consider using container visibility classes for hiding elements
If we have a custom component that we want visible only at specific browser widths, consider using the `utility classes` available from the `container.overrides` file.

They hide or show elements based on the combination of classes passed in the `component.jsx` file.

See the [`container.overrides`](https://github.com/eea/volto-eea-design-system/blob/e7b5828c2f186f710546e6d106330b3b244ba903/theme/themes/eea/elements/container.overrides#L18) file for details.

Extra code way:
```less
@media screen and (max-width:768px) {
  .component {
    display: none;
  }
}
```
Better way:
```jsx
<Component className={"mobile hidden"} 
```

### Don't add HTML tags to the css specificity selector

If we have:
  ```css
  .ui.button.basic
  ```
  Avoid adding:
  ```css
  button.ui.button.basic {}
  table.ui.plain {}
  ```
  Instead opt for variable overrides or add extra classes:
  ```css
  .ui.table.eea-table-plain {
    tag: style
  }
  ```

### Add custom classes after the semantic ui classes

Wrong:
```less
.ui.eea-button-action.button {}
```

Right:
```less
.ui.button.eea-button-action {}
```

### Use Semantic UI naming style
If you introduce a new variant of a Semantic UI component, ex new button variant:
Wrong:
```less
.ui.button.eea-button-action {}
```
Right:
```less
.ui.button.action {}
```

If you add a new non-Semantic UI component:

Wrong:
```css
.eea-header {}
.eea-header-action {}
```
Right:
```css
.eea.header {}
.eea.header .action {}
```

### Keep important rules to a minimum and make sure they are well documented
In general `!important` should be used for `utility classes` only where you need to have the highest specificity.

If you need to add any css `!important` rules, they need detailed comments on what is fixed and where/what to check for fix reproduction with a `FIXME comment`.
Wrong:
```less
.ui.dropdown {
  height: auto !important;
}

```
Better:
```less
// FIXME reset left margin since help is a p tag
.help {
  margin-left: 0 !important;
}
```
Best:
```less
// ### Used in login page form /login_form
// FIXME reset left margin using !important since help is a p tag
// with margin set to important
.help {
  margin-left: 0 !important;
}
```


### Use relative units in general

Gutters/spacing are now measured using px instead of rem.
SemanticUI uses rem.

So if designer set 20px, it must be transformed to rem units, by taking the base font-size of 16px then we get 20/16 = 1,25rem.

So that if in the future we change the base font-size the `gutters/spacing` will also adjust. 
Wrong:
```less
@gutterWidth: 20px;
```

Right:
```less
@gutterWidth: 2rem;
```

### Think globally, act locally
If you have a section repeated in several components, consider introducing a global variable that will be default for all the components where that section is present.  
Ex:

Many components have a `meta section`.
This section can be aligned either `left` or `right`.

Therefore, we should introduce a global variable within the `site.variables` add a new `global` variable:

```less
// site.variables
/* This adjusts the meta alignment across all elements */
@metaAlign: left;
```
Then use this global variable in each component where we have a `meta section`:
```less
// blockquote.variables
/* This rule uses by default the global setting */
@blockquoteMetaAlign: @metaAlign;
```
If later the design calls to have the meta sections to the right,
it's simply a job of changing one global variable:
```less
// site.variables
/* This adjusts the meta alignment across all elements */
@metaAlign: right;
```

The same is true with colors used in components, try to avoid custom values set on components only as they should be part of the `site.variables` color pallete.

#### Semantic UI global setting example
We see this rule played out in many places within `site.variables`:
```less
// site.variables
/*--------------
Form Input
---------------*/
/* This adjusts the default form input across all elements */
@inputBackground        : @white;
```
Then within `form.variables` we have several rules that make use of the global setting:

```less
// form.variables
/* Text Area */
@textAreaBackground: @inputBackground;

/* Inverted */
@invertedInputBackground: @inputBackground;
```

### Check components design when having odd numbers or images

As written down in the [Card component issue](https://github.com/eea/volto-eea-design-system/issues/13#issuecomment-1029066419), if your component accepts images consider how
they would adapt in case there is a mix between `portrait` and `landscapei` images.

What about situations where you have an odd number of elements or the body of the components differ in size?

The components need to be checked for such situations and to ensure they are flexible to deal with these mix and match elements.

Ex:

If the card is `flex` based and the parent `wrapper` is flex as well, consider adding a max-height to the card `body` or `image wrapper` so that they all keep a standard size.

