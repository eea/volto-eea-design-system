## API

<MessageJSDoc />

## Setup

There are 2 ways to initialise the component.

### Automatic

Add `data-ecl-auto-init="Message"` attribute to component's markup:

```html
<div
  role="alert"
  class="ecl-message ecl-message--info"
  data-ecl-message
  data-ecl-auto-init="Message"
>
  ...
</div>
```

Use the `ECL` library's `autoInit()` (`ECL.autoInit()`) when your page is ready or other custom event you want to hook onto.

### Manual

Get target element, create an instance and invoke `init()`.

Given you have 1 element with an attribute `data-ecl-message` on the page:
