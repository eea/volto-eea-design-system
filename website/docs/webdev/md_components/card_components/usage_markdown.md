Cards provide an entry point to more detailed content. Use a concise title, a meaningful preview and a clear primary action so readers can scan and compare items.

### One card, configured with controls

The Listing Block offers **two card types** instead of the former eight templates:

| Card type | Use it for | Replaces |
| --- | --- | --- |
| **Card** | Cards in a list, grid or carousel, with the image above, below or beside the text, or only the image with the title on it. | Card (default), Image Card, Image on left, Image on right, Visualization Card |
| **List item** | Rows of a list, with an optional image on the side. The **Compact** size shows only the title and the content type. | Listing Item, Search Item, Simple Item |

How the card looks is set with its controls, not by picking another template. The reusable **visualisation card** used for SOER visualisations and Indicators is a **Card** with a top accent border, the image at the bottom and the benchmark level shown (see below).

### Listing layouts

The **Variation** of the Listing Block only sets the layout:

- **List**: the items one below the other (default for new blocks).
- **Grid**: a grid of 3 to 6 columns.
- **Carousel**: a slider.
- **Accordion**: titles that expand to show the description.

Blocks saved with a former variation keep rendering as before. A former **Visualization Cards** block becomes a **Grid** with the **Top accent border** card style when it is selected in the editor.

### Card elements

The **Card elements** control in the card settings lists the parts of the card: image, content type, date, title, benchmark level, description, tags and call to action.

- **Order:** drag an element by its handle, or use the arrows, to change its place in the card. Tags and the call to action placed last are shown in the card footer.
- **Show / hide:** switch an element on or off with its toggle. A hidden element keeps its place for when it is shown again.
- **Settings:** expand an element to edit its settings, for example the title max lines and icon, the event date, the description max lines, the image label, or the label and destination of the call to action.

The image takes part in the order when its position is **In the card**. With **Left** or **Right** it stays on the side of the text; side images are not offered in grids and carousels.

### Configuration and defaults

| Setting | Default | Behaviour |
| --- | --- | --- |
| **Content type** | Off | Shows the content-type label. |
| **Date** | On | Shows the publishing date when one is available. |
| **Description** | Off on cards, on on list items | Shows the description when content is available. |
| **Call to action** | Off | Shows the action button, with its label (**Read more** by default) and destination. |
| **Enable CTA content popup** | Off | Opens the action destination in a popup on viewports at least 1280 px wide. |
| **Top accent border** (card styling) | Off | Adds the thick top border and the light shadow of the visualisation card. |

Turning off a default does not reset values already saved on existing cards.

### Configure the visualisation card

To show SOER visualisations or Indicators, for example on an Indicator landing page:

1. Add or select a **Listing** block and configure its query, for example to select Indicators.
2. Choose **Variation → Grid** and the number of columns.
3. Choose **Card type → Card**.
4. In **Card elements**, order the elements as **Content type, Title, Date, Benchmark level, Description, Image**, switch on **Benchmark level** and, if needed, **Content type** and **Call to action**.
5. In **Card styling**, switch on **Top accent border**.

The preview image is picked automatically from the content type (see **Preview images**).

### List item

The list item keeps plain options, as its elements have a fixed order: image position (left, right or none), title max lines and icon, publication and event date, description and its max lines, content type, new/archived label, tags and call to action. The **Compact** size shows only the title and the content type.

### Title, image and CTA behaviour

The title, the preview image and the CTA use the same destination and action on every card type and layout (list, grid, carousel) and in Teaser blocks:

- **Popup off:** the title, image and CTA navigate to the configured CTA destination, including a custom action URL. If no custom destination is supplied, they use the content URL.
- **Popup on, viewport at least 1280 px wide:** all available entry points open the same content popup.
- **Popup on, viewport below 1280 px:** all available entry points navigate to the destination instead of opening a popup.
- **Edit mode:** these entry points do not navigate or open a popup while the editor is configuring the card.

Only elements present on the card are interactive. A card showing only the image has its title on the image, in one link; the compact list item is one link. Hiding the CTA button does not remove the title and image as entry points.

These are multiple entry points to **one action**, not separate destinations. Avoid adding unrelated links that compete with that action.

### Preview images

The preview image is picked from the content type, in every layout and in Teaser blocks:

- **Interactive charts (Plotly):** the generated Plotly preview of the chart.
- **Indicators:** the Indicator's own lead image when available; otherwise the preview of its first embedded figure, in the page's block order. If that image cannot be loaded, the card tries the next embedded figure.
- **Other content:** its preview or lead image.

An image chosen on a Teaser block always wins. The Indicator does not need a SOER-specific `soer_miniature` thumbnail, and additional image types should use the shared preview mechanism rather than introduce duplicate card components.

If an Indicator preview is missing or unexpected, check its lead image, the order of its embedded blocks and the preview exposed by the first embedded item.

### When to use

- Help readers browse content and compare related items.
- Group different content types with a consistent layout.
- Show only the information needed to decide whether to open an item.
- Use a responsive layout appropriate to the content and available width.

### When not to use

- Avoid large collections of cards when filtering or a compact list would better support the task.
- Avoid long descriptions or too many competing actions on a card.
- Keep number and key-message cards as separate components; they serve a different purpose.

### Existing content

Cards and listings saved with the former templates and variations keep rendering as before, with the title/image behaviour above. When an editor selects such a block, its settings are converted to the new card controls; the change is saved with the page.

### Scope and reuse

This update covers the Listing Block card family. The cards in **Advanced Search (`volto-searchlib`)** use the same list item, and the reuse of the new card layout there is a follow-up.

Review legacy cards for reuse where appropriate. Migrating cards on thematic sites such as WISE Freshwater or Climate-ADAPT, and consolidating their implementations, are follow-up work; documenting this component does not imply those migrations have been completed.
