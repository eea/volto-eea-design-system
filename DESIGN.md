---
version: alpha
name: EEA Design System
description: >
  European Environment Agency design system for Volto-based web applications.
  User-centered, WCAG-compliant, with a focus on clarity, functionality,
  and consistent responsive behaviour across devices.
colors:
  # ── Semantic / Core ──
  primary: "#004B7F"
  secondary: "#007B6C"
  tertiary: "#3D5265"
  text: "#3D5265"
  background: "#FFFFFF"
  background-supplementary: "#F9F9F9"
  highlight: "#007B6C"

  # ── Link states ──
  link-default: "#006BB8"
  link-hover: "#004B7F"
  link-visited: "#753AAD"
  link-active: "#003052"

  # ── State / feedback ──
  success: "#007B6C"
  warning: "#FF9933"
  error: "#B83230"
  info: "#004B7F"

  # ── Brown palette ──
  brown-0: "#FFF6EC"
  brown-1: "#FFEDD8"
  brown-2: "#E7BC91"
  brown-3: "#BC8A5F"
  brown-4: "#8B5E34"
  brown-5: "#603808"
  brown-6: "#3D2201"

  # ── Purple palette ──
  purple-0: "#EFEBF2"
  purple-1: "#DFD6E7"
  purple-2: "#BEADCE"
  purple-3: "#9E84B6"
  purple-4: "#753AAD"
  purple-5: "#5C3285"
  purple-6: "#3C096C"

  # ── Red palette ──
  red-0: "#FBEEF8"
  red-1: "#F6DDF0"
  red-2: "#E7B2C0"
  red-3: "#D78890"
  red-4: "#C65B59"
  red-5: "#B83230"
  red-6: "#5C1918"

  # ── Yellow palette ──
  yellow-0: "#FEF6CD"
  yellow-1: "#FBEC9B"
  yellow-2: "#FAD936"
  yellow-3: "#FAC50D"
  yellow-4: "#FDAF20"
  yellow-5: "#FF9933"
  yellow-6: "#C35527"

  # ── Green palette ──
  green-0: "#C8FFF8"
  green-1: "#A0E5DC"
  green-2: "#78CAC0"
  green-3: "#50B0A4"
  green-4: "#289588"
  green-5: "#007B6C"
  green-6: "#005248"

  # ── Blue palette ──
  blue-0: "#A0D7FF"
  blue-1: "#47B3FF"
  blue-2: "#008FF5"
  blue-3: "#0079CF"
  blue-4: "#006BB8"
  blue-5: "#004B7F"
  blue-6: "#003052"

  # ── Blue-grey palette ──
  blue-grey-0: "#DAE8F4"
  blue-grey-1: "#ACCAE5"
  blue-grey-2: "#87A7C3"
  blue-grey-3: "#6989A5"
  blue-grey-4: "#4C677F"
  blue-grey-5: "#3D5265"
  blue-grey-6: "#2E3E4C"

  # ── Grey palette ──
  grey-0: "#FFFFFF"
  grey-1: "#F9F9F9"
  grey-2: "#E6E7E8"
  grey-3: "#BCBEC0"
  grey-4: "#747678"
  grey-5: "#323232"
  grey-6: "#000000"

  # ── Thematic platforms ──
  biodiversity-primary: "#289588"
  biodiversity-secondary: "#FAC50D"
  forest-primary: "#007B6C"
  forest-secondary: "#005248"
  freshwater-primary: "#0079CF"
  freshwater-secondary: "#004B7F"
  marine-primary: "#004B7F"
  marine-secondary: "#0079CF"

typography:
  h1:
    fontFamily: Roboto
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.015em
  h2:
    fontFamily: Roboto
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.015em
  h3:
    fontFamily: Roboto
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.015em
  h4:
    fontFamily: Roboto
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.015em
  h5:
    fontFamily: Roboto
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.015em
  body:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  caption:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.01em
  small:
    fontFamily: Roboto
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.01em
  label:
    fontFamily: Roboto
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0.1em

spacing:
  space-025: 1px
  space-05: 2px
  space-1: 4px
  space-2: 8px
  space-3: 12px
  space-4: 16px
  space-5: 20px
  space-6: 24px
  space-7: 28px
  space-8: 32px
  space-9: 36px
  space-10: 40px
  space-11: 44px
  space-12: 48px
  space-13: 52px
  space-14: 56px
  space-15: 60px
  space-16: 64px
  space-17: 68px
  space-18: 72px
  space-19: 76px
  space-20: 80px
  space-24: 96px

rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px

components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.grey-0}"
    rounded: "{rounded.none}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.green-6}"
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.grey-0}"
    rounded: "{rounded.none}"
    padding: 12px
  button-secondary-hover:
    backgroundColor: "{colors.blue-6}"
  input:
    backgroundColor: "{colors.grey-0}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: 12px
  link:
    textColor: "{colors.link-default}"
    typography: "{typography.body}"
  tag:
    backgroundColor: "{colors.grey-1}"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    padding: 4px
---

## Overview

The EEA Design System is built on a foundation of **functional clarity** and **institutional trust**. Every visual choice serves the content first, avoiding decorative excess. The system is user-centered, follows WCAG 2.1 accessibility guidelines, and is designed for responsive deployment across a network of thematic platforms.

Key design characteristics:

- **Minimal drop shadows** — visual hierarchy is achieved through color contrast, spacing, and typography rather than elevation.
- **Sharp edges and corners** — the default border radius is 0px, reinforcing a clean, engineered, and authoritative aesthetic.
- **Uncluttered, distraction-free design** — whitespace is used deliberately. Content breathes.
- **High readability with clear typography** — Roboto at 16px base, with a strict hierarchy of weights and sizes.
- **Easily adjusted for responsive design** — desktop and mobile type scales are defined, and the 8px grid system adapts to any viewport.

The system emphasizes **function over appearance** while maintaining a consistent look irrespective of screen resolution or device type. Unnecessary decorative elements are avoided to support faster loading times and clearer user journeys.

## Colors

The EEA color system is designed for accessibility, thematic flexibility, and clear communication. All color combinations must meet WCAG AA contrast ratios (4.5:1 for normal text). The palette is organized into semantic roles, full shade families, and thematic platform variants.

### Semantic Colors

- **Primary (#004B7F):** EEA Blue — the dominant institutional color, used for primary actions, headers, and key structural elements.
- **Secondary (#007B6C):** EEA Green — used for highlights, success states, and complementary actions.
- **Tertiary (#3D5265):** Deep Blue-Grey — the default body text color, providing high contrast on white backgrounds.
- **Background (#FFFFFF):** Pure white is the default page background.
- **Background Supplementary (#F9F9F9):** A near-white tone used for alternate sections or subtle differentiation.

### State Colors

- **Success (#007B6C):** Positive confirmations, valid form states.
- **Warning (#FF9933):** Cautionary messages, non-critical alerts.
- **Error (#B83230):** Critical errors, invalid form states, destructive actions.
- **Info (#004B7F):** Informational messages, neutral alerts.

### Link Colors

- **Default (#006BB8):** Standard interactive links.
- **Hover (#004B7F):** Link state on mouse hover.
- **Visited (#753AAD):** Links the user has already followed.
- **Active (#003052):** Link state during active press.

### Full Palettes

Each color family contains 7 shades (0–6), from lightest to darkest. These are used for gradients, hover states, backgrounds, and data visualizations.

**Brown** — warm earth tones for natural-science contexts: #FFF6EC, #FFEDD8, #E7BC91, #BC8A5F, #8B5E34, #603808, #3D2201.

**Purple** — for distinct thematic differentiation: #EFEBF2, #DFD6E7, #BEADCE, #9E84B6, #753AAD, #5C3285, #3C096C.

**Red** — error, urgency, attention: #FBEEF8, #F6DDF0, #E7B2C0, #D78890, #C65B59, #B83230, #5C1918.

**Yellow** — warning, highlights, energy: #FEF6CD, #FBEC9B, #FAD936, #FAC50D, #FDAF20, #FF9933, #C35527.

**Green** — success, nature, positive action: #C8FFF8, #A0E5DC, #78CAC0, #50B0A4, #289588, #007B6C, #005248.

**Blue** — primary institutional tone, trust, water: #A0D7FF, #47B3FF, #008FF5, #0079CF, #006BB8, #004B7F, #003052.

**Blue-Grey** — text, borders, neutral UI: #DAE8F4, #ACCAE5, #87A7C3, #6989A5, #4C677F, #3D5265, #2E3E4C.

**Grey** — neutrals from white to black: #FFFFFF, #F9F9F9, #E6E7E8, #BCBEC0, #747678, #323232, #000000.

### Thematic Platforms

The EEA network uses the full palette above, but each thematic platform has a unique pair of brand colors extracted from its identity:

- **Biodiversity:** primary #289588, secondary #FAC50D.
- **Forest:** primary #007B6C, secondary #005248.
- **Wise Freshwater:** primary #0079CF, secondary #004B7F.
- **Wise Marine:** primary #004B7F, secondary #0079CF.

## Typography

The type system uses **Roboto** as the primary typeface, with **Arial** as the web-safe fallback. Roboto is chosen for its geometric clarity and excellent legibility at screen resolutions. Weights from 300 (Light) to 700 (Bold) are available. Bold is reserved for headings; Regular (400) is used for body text.

### Scale

The desktop type scale defines the canonical sizes. Mobile sizes are reduced proportionally to maintain hierarchy without overcrowding small screens.

**Desktop:**

- **H1:** 44px, Bold, line-height 1.2, letter-spacing -0.015em.
- **H2:** 32px, Bold, line-height 1.2, letter-spacing -0.015em.
- **H3:** 26px, Bold, line-height 1.2, letter-spacing -0.015em.
- **H4:** 20px, Bold, line-height 1.2, letter-spacing -0.015em.
- **H5:** 18px, Bold, line-height 1.2, letter-spacing -0.015em.
- **Body:** 16px, Regular, line-height 1.5, letter-spacing 0em.
- **Caption:** 14px, Regular, line-height 1.5, letter-spacing 0.01em.
- **Small:** 12px, Regular, line-height 1.5, letter-spacing 0.01em.

**Mobile:**

- **H1:** 30px (down from 44px).
- **H2:** 24px (down from 32px).
- **H3:** 20px (down from 26px).
- **H4:** 18px (down from 20px).
- **Body, Caption, Small:** remain the same as desktop.

### Line Length

For optimal readability, limit line length to **no more than 80 characters** (including spaces) on desktop, and **40 to 60 characters** on mobile.

## Layout

The layout system is built on an **8px base grid**. All major measurements — spacing, component heights, and layout gaps — align to this grid. Smaller elements such as icons may align to a 4px sub-grid, and typography sits on a 4px baseline grid.

### Spacing Scale

Two spacing scales are used:

- **Component spacing** (inside elements): 4px, 8px, 12px, 16px, 20px, 24px, 32px, 36px, 40px, 48px.
- **Layout spacing** (between elements): 16px, 24px, 32px, 48px, 64px, 96px.

The full token scale runs from 1px to 96px in 4px increments (with 1px and 2px micro-steps for fine adjustments).

### Container Widths

- **Narrow:** 900px
- **Container:** 1120px
- **Wide:** 1320px (1220px on laptop breakpoints)

## Elevation & Depth

The EEA Design System avoids heavy shadows. Elevation is expressed primarily through **color contrast**, **spacing**, and **border definition** rather than drop shadows.

When elevation is required (e.g., for modals or dropdowns), use subtle, low-opacity shadows:

- **Subtle shadow:** `0px 1px 2px 0 rgba(0,0,0,0.05)` — for slight separation.
- **Floating shadow:** `0px 2px 4px 0px rgba(34,36,38,0.12), 0px 2px 10px 0px rgba(34,36,38,0.15)` — for elevated overlays.

The default global shadow is `none`.

## Shapes

The shape language is defined by **architectural sharpness**. The default corner radius for all interactive elements, containers, and inputs is **0px**. This reinforces the institutional, precise, and uncluttered character of the design.

Circular elements (avatars, icon containers, badges) are the exception and use a **50% border radius**.

## Components

### Buttons

- **Primary button:** background EEA Green (#007B6C), white text, 0px radius, 12px padding. Hover darkens to #005248.
- **Secondary button:** background EEA Blue (#004B7F), white text, 0px radius, 12px padding. Hover darkens to #003052.

### Inputs

- Background is white, text is deep blue-grey (#3D5265).
- No border radius (0px).
- Vertical padding 12px, horizontal padding 18px.
- Focus state uses a 0.2rem outline in #008FF5 (blue-2) for accessibility.
- Placeholder color: #B8C6C8.

### Links

- Default color: #006BB8.
- No underline by default.
- Hover, visited, and active states follow the link color palette.

### Tags / Chips

- Background: #F9F9F9 (grey-1).
- Text: #3D5265.
- 0px radius, 4px padding.
- Single-color, no gradients or shadows.

## Do's and Don'ts

- **Do** ensure all text meets WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text).
- **Do** use the 8px grid for all spacing and sizing decisions.
- **Do** use Roboto for all UI text; Arial is the acceptable fallback.
- **Do** keep line length under 80 characters on desktop and 40–60 on mobile.
- **Do** use images only when they add value to the content; always provide alt text.
- **Don't** use drop shadows as the primary method of conveying hierarchy.
- **Don't** apply border radius to cards, buttons, or inputs unless explicitly required by a component variant.
- **Don't** convey information using color alone; always pair with text, icons, or patterns.
- **Don't** embed text inside images (breaks translation and accessibility tools).
- **Don't** use more than two font weights on a single screen.
- **Don't** apply effects, gradients, borders, or filters to photographs.
