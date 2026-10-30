Cards provide an entry point to more detailed content. Use a concise title, a meaningful preview and a clear primary action so readers can scan and compare items.

### One card, configured with controls

The Listing Block has two base templates: **Card** and **List item**. Every other look (image on the side, title on the image, title and logo, top accent border, compact item, search result) is a setting of one of them, not a separate template. The layout picks the template:

| Layout (Listing variation) | Template | Use for |
| --- | --- | --- |
| **List** | List item | Rows of results, with or without an image on the side |
| **Grid** | Card | Comparing items side by side, e.g. visualisations and Indicators |
| **Carousel** | Card or List item | A short selection in limited space |
| **Accordion** | — | Titles that expand into their content |

Teaser blocks use the same Card and List item, so a teaser and a listing configured alike look alike.

### Visualisation card

The visualisation card is a **Grid** of cards with the **Top accent border**. To configure it on an Indicator landing page:

1. Add or select a **Listing** block and configure its query to select Indicators.
2. Choose **Variation → Grid** and the **Grid Size**.
3. In **Card styling**, set **Border → Top accent border**.
4. In **Card elements**, choose which elements are shown and in which order.

Existing blocks saved with the former **Visualization Cards** variation keep rendering as before. When the block is edited it is converted to a Grid with the top accent border; the result looks the same.

### Card controls

| Control | Options | Behaviour |
| --- | --- | --- |
| **Content mode** | Image and content, Image only (title on image), Title and logo | Title and logo is offered in teasers only. |
| **Image position** | In the card (see elements order), Left, Right, No image | Left and right are not offered in grids and carousels. |
| **Flip card** | Off / On | Vertical cards only. Each element is then placed on the front or the back. |
| **Card elements** | Image, Title, Date, Description, Content type, Benchmark level, Tags, Call to action | Turn each element on or off and drag them in the order they are shown. |
| **Show action** | Off / On, with label and URL template | The call to action button. The examples use **Read more**. |
| **Enable CTA content popup** | Off / On | Opens the destination in a popup on viewports at least 1280 px wide. |

**List item** has the same elements, plus **Size** (Default, or **Compact (title only)**) and **Image position** Left, Right or No image.

**Card styling** offers the theme, **Inverted**, **Border** (No border, Bordered, Top accent border on cards), an opt-in **Drop shadow** on cards, and, when there is an image, rounded corners, object fit and object position.

New cards show the publication date by default. Turning off a default does not reset values already saved on existing cards.

### Title, image and CTA behaviour

The title, the preview image and the call to action lead to **one** destination, on every card and list item, in every layout and in teasers:

- **Popup off:** they navigate to the CTA destination, including a custom action URL. Without one, they use the content URL.
- **Popup on, viewport at least 1280 px wide:** all of them open the same content popup.
- **Popup on, viewport below 1280 px:** they navigate instead of opening the popup.
- **Edit mode:** they do not navigate or open a popup while the editor is configuring the card.

Only elements present on the card are interactive. A compact list item is a single link, and its call to action is part of it. Hiding the call to action does not remove the title and image as entry points. Cards saved in the past with their link turned off keep the title and image without a link; their call to action remains a link.

These are multiple entry points to one action, not separate destinations. Avoid adding unrelated links that compete with that action.

### Preview images

Indicator previews are resolved in every layout (List, Grid, Carousel) and in teasers:

1. Use the Indicator's own lead or preview image when available.
2. Otherwise, inspect its embedded content in the page's block order and use the first available preview. The first embedded figure supplies the card preview when it has a usable image; a later figure is not selected merely because it was returned first by a content request.

Embedded previews can come from Plotly visualisations or static images. The Indicator does not need a SOER-specific `soer_miniature` thumbnail. Existing SOER visualisations remain supported, and new image types should use the shared preview mechanism rather than introduce new card components.

If an Indicator preview is missing or unexpected, check its lead image, its embedded block order and the preview exposed by the first embedded item.

### Existing content

Blocks saved with the former card templates (Visualization Card, Image Card, Image on left, Image on right, Image on bottom, Listing Item, Search Item, Simple Item) keep rendering as before; they are read as the matching Card or List item settings. The block data is converted when the block is edited.

Add-ons can still register their own card templates. On **List** and **Grid** the template select then appears next to the base template, and such a card keeps its own settings.

### When to use

- Help readers browse content and compare related items.
- Group different content types with a consistent layout.
- Show only the information needed to decide whether to open an item.
- Use a responsive layout appropriate to the content and available width.

### When not to use

- Avoid large collections of cards when filtering or a compact list would better support the task.
- Avoid long descriptions or too many competing actions on a card.
- Keep number and key-message cards as separate components; they serve a different purpose.

### Scope and reuse

The cards of the **Advanced Search (`volto-searchlib`)** results use the same visualisation card ([eea/volto-searchlib#210](https://github.com/eea/volto-searchlib/pull/210)).

Review legacy cards for reuse where appropriate. Migrating cards on thematic sites such as WISE Freshwater or Climate-ADAPT, and consolidating their implementations, are follow-up work; documenting this component does not imply those migrations have been completed.
