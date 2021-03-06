## API

<TableJSDoc />

## Setup

Add `data-ecl-table-sort-toggle` attribute on table headings for which you want to activate sorting.

There are 2 ways to initialise the component for sort table.

### Automatic

Add `data-ecl-auto-init="Table"` attribute to component's markup:

```html
<table data-ecl-auto-init="Table" class="ecl-table">
  ...
</table>
```

Use the `ECL` library's `autoInit()` (`ECL.autoInit()`) when your page is ready or other custom event you want to hook onto.

### Manual

Get target element, create an instance and invoke `init()`.

Given you have 1 element with an attribute `data-ecl-table` on the page:
