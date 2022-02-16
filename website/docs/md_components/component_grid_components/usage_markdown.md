## The grid:

A grid is a structure with a long history used to align negative space in designs.

Using a grid makes content appear to flow more naturally on your page.

<br />

## Columns

Grids divide horizontal space into indivisible units called "columns". All columns in a grid must specify their width as proportion of the total available row width.

All grid systems choose an arbitrary column count to allow per row. Semantic's default theme uses **16 columns**.

The example below shows four four wide columns will fit in the first row, 16 / 4 = 4, and three various sized columns in the second row. 2 + 8 + 6 = 16

The default column count, and other arbitrary features of grids can be changed by adjusting Semantic UI's underlying theming variables.

<br />

## Rows

Rows are groups of columns which are aligned horizontally.

Rows can either be explicit, marked with an additional row element, or implicit, automatically occurring when no more space is left in a previous row.

After each group of columns vertical spacing is added to separate each group of columns, creating vertical rhythm.

<br />

## Gutters

Grid columns are separated by areas of white space referred to as "gutters". Gutters improve legibility by providing, negative space between page elements.

Gutters remain a constant size regardless of the width of the grid, or how many columns are in a row. To increase the size of gutters in a particular grid, you can use a relaxed grid variation.

<br />

## Negative Margins

Since all grid columns include gutters, grids use negative margins to make sure that the first and last columns sit flush with content outside the grid.

In the following example, you can see even though the top row has padding, the attached button still sits flush with the edge of the grid.

In some cases, like when a column or row is colored, you may want to avoid using negative margins. You can do this by using a padded grid variation.

<br />

## Page Grids

Grids are fluid and will automatically flow in size to take the maximum available width.

Containers are elements designed to limit page content to a reasonable maximum width for display based on the size of the user's screen.

Using a ui grid container is the best way to include top-level page content inside a grid.

<br />

## Columns

**Automatic Flow**

Most grids do not need to specify rows. Content will automatically flow to the next row when all the grid columns are taken in the current row.

**Column Content**

Since columns use padding to create gutters, content stylings should not be applied directly to columns, but to elements inside of columns.

**Column Widths**

Column widths can be specified using (x) wide class names. If a column cannot fit in a row it will automatically flow to the next row

<br />

## Rows

**Grouping**

Row wrappers allow you to apply variations to a group of columns.

**Clearing Content**

Row wrappers will automatically clear previous columns, making them useful when using floated variations.

**Special Grids**

Additionally, some types of grids, like divided or celled require row wrappers to apply formatting correctly.