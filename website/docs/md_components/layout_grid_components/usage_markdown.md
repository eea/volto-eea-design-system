## The grid:

- containers are required when using our default grid system as they are the most basic layout elements, representing a means to horizontally align components or content elements - this is done by invoking `.ecl-container`
- the column classes **express the number of columns to be engaged out of the maximum**, which is 12 per row (such as an element invoking `.ecl-col-2` occupies two columns)
- **container widths and breakpoints are expressed in pixels**
- each column has **horizontal padding (gutter) for regulating the space between** them
- **the gutters are expressed in rems**
- **the width of the columns is always proportional to the container width**, which is fixed (except for viewports <480px), and they are expressed in percentages
- the rows wrap around the columns, allowing you to specify the amount of columns content wraps around

## ECL Grid Options

The grid's breakpoints are established on the minimum width media queries, therefore the are applied on the targeted breakpoint and all those above it.

| viewport        | Extra small (≥ 0px) | Small (≥ 480px) | Medium (≥ 768px) | Large (≥ 996px) | Extra large (≥ 1140px) |
| --------------- | ------------------- | --------------- | ---------------- | --------------- | ---------------------- |
| container width | 100%                | 480px           | 768px            | 996px           | 1140px                 |
| class prefix    | `.ecl-col-`         | `.ecl-col-s-`   | `.ecl-col-m-`    | `.ecl-col-l-`   | `.ecl-col-xl-`         |

## ECL Grid Examples

## Grid offset

When using the ECL grid, there is the ability to offset columns. You can offset columns from left to right by invoking the `.ecl-offset-*` classes (where \* = the number of columns). These classes simply increase the left margin by \* number of columns.

## Do's

- always place content within columns
- specify the exact amount of columns content must occupy
- use **`.ecl-offset-*` grid classes** for **offsetting content**

## Don'ts

- don't use margin to offset content
