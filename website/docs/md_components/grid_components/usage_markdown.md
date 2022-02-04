## Layout Grid

The responsive layout grid is made up of three elements: columns, gutters, and margins.

### Columns

Content is placed in the areas of the screen that contain columns. The number of columns displayed in the grid is determined by the breakpoint range, a range of predetermined screen sizes. A breakpoint can correspond with mobile, tablet, or other screen type.

![](../static/grid1.png)
<br />

On mobile, at a breakpoint of 480px, this layout grid uses 4 columns.

![](../static/mobile-mid-grid.png)

<br />

On tablet, at a breakpoint of 834px, this layout grid uses 8 columns.

![](../static/tablet-mid-grid.png)   

<br /> 
On desktop, at a breakpoint of 1024px, this layout grid uses 12 columns.

![](../static/desktop-mid-grid.png)

### Gutters

A gutter is the space between columns that helps separate content. Gutter widths are fixed values at each breakpoint range. Wider gutters are more appropriate for larger screens, as they create more open space between columns.
<br />

On mobile, at a breakpoint of 480px, this layout grid uses 20px gutters.  
![](../static/mobile-mid-grid.png)   

<br />

On tablet, at a breakpoint of 7687px, this layout grid uses 20px gutters.  
![](../static/tablet-mid-grid.png)   

<br />

On desktop, at a breakpoint of 1024px, this layout grid uses 20px gutters.   
![](../static/desktop-mid-grid.png)   


### Don’ts

Do not make gutters too large or the same width as the columns. Oversized gutters will not leave enough room for content and may prevent a layout from appearing unified.

### Breakpoints

A breakpoint is the screen size threshold determined by specific layout requirements. At a given breakpoint range, the layout adjusts to suit the screen size and orientation.
ΕΕΑ provides responsive layouts based on 4-column, 8-column, and 12-column grids, available for use across different screens, devices, and orientations.
Each breakpoint range determines the number of columns, and recommended margins and gutters for each display size.


<table style={{textAlign:'center'}}>
    <thead style={{width:700+'px'}}>
        <th></th>
        <th>Breakpoints</th>
        <th>Columns</th>
        <th>Gutters</th>
        <th>Margins</th>
    </thead>
    <tbody>
        <tr>
            <td style={{fontWeight:'bold'}}>Mobile</td>
            <td>320-480</td>
            <td>4</td>
            <td>20</td>
            <td>30</td>
        </tr>
        <tr>
            <td style={{fontWeight:'bold'}}>Tablet</td>
            <td>481-768</td>
            <td>8</td>
            <td>20</td>
            <td>40</td>
        </tr>
        <tr>
            <td style={{fontWeight:'bold'}}>Desktop</td>
            <td>1025 and above</td>
            <td>12</td>
            <td>20</td>
            <td>140</td>
        </tr>
    </tbody>
</table>

