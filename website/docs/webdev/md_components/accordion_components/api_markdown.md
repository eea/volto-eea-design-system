## API

<AccordionJSDoc />

## Setup

There are 2 ways to initialise the component.

### Automatic

Add `data-ecl-auto-init="Accordion"` attribute to component's markup:

```html
<div class="ecl-accordion" data-ecl-accordion data-ecl-auto-init="Accordion">
  ...
</div>
```

Use the `ECL` library's `autoInit()` (`ECL.autoInit()`) when your page is ready or other custom event you want to hook onto.

### Manual

Get target element, create an instance and invoke `init()`.

Given you have 1 element with an attribute `data-ecl-accordion` on the page:
