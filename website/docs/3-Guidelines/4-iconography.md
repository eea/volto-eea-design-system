---
title: Iconography
order: 5
---

Consistency is key with icons, and all your icons should be the same size when you build them. Our grid is based on 8s, you'd want to build at 16, 24, or 32. 

Choose a common size to build all your icons to, and then allow your engineers to scale to other sizes that might be needed by other designers. You don't want to build the same icon over and over at a multitude of sizes. 

For product icons, use 1 color. Anything more than that and your components are going to become too complex and difficult for other designers to leverage.  Anything with 3 or more colors is an illustration, not an icon. 

### Grids 

 

The pixel grid is the fundamental grid that uses the smallest increment: a pixel. When building icons, you always want to align objects to the pixel grid, especially straight lines. But, you can build other shapes on the pixel grid.  You want to build things on the pixel grid, not just because it will render more nicely, but because it makes your life easier. Spacing things evenly is much easier when you're using a grid. It helps you stay consistent with your placement, and overall will make your icons look better.  

 The optical grid helps us figure out where the center of mass of the icon is, as well as how large it is perceived by the human eye. Circles and curved objects take up less visual space than squares. It is best to put your icons in a fixed size container so that they’re all identical dimensions when exported. Adding this intrinsic padding supports the optical/perceptive weighting without additional effort in dev later. 

In building the optical grid, you should give padding at the edge that’s equal to your stroke weight, or possibly double if using a 1px stroke.  

 

### Strokes and fills 

Making sure our icons are all styled the same way is very important. We might have use cases for applying a fill to show something is selected, for instance, but you definitely want to create a set with one style, and possibly create the other variant. 

Typically, filled icons have higher recognizability. Stroked icons give us great ability to create tiny details. When choosing which style is more appropriate, you should also consider your overall brand. 

If you're going to create stroked icons, strokes all need to be the same weight. The space between strokes not be thinner than your stroke weight. 

### Don’ts 

When possible, avoid type in icons. Icons are meant to be global. If you do need type (for instance, currency symbols), draw it yourself, rather than using a typeface. 

 