Cards provide an entry point to more detailed content. Use a concise title, a meaningful preview and a clear primary action so readers can scan and compare items.

### Reusable visualisation card

The visualisation card extends the existing Listing Block card implementation for SOER visualisations, Indicators and other content with a suitable preview. It retains the top border, title, preview image and **Read more** action. It is not a separate component for each content type.

To configure it on an Indicator landing page:

1. Add or select a **Listing** block and configure its query to select Indicators.
2. Choose **Variation → Visualization Cards**.
3. Choose **Card type → Visualization Card**.
4. Open **Card schema** to configure the metadata and action.

Keep the current **Visualization Card** name in the editor. The implementation uses the `visualizationCard` card-template identifier; adopting a new user-facing name such as “standard card” is a separate decision.

### Configuration and defaults

These defaults apply to the **Visualization Card** template. Other card templates retain their own metadata settings.

| Card schema setting | Default | Behaviour |
| --- | --- | --- |
| **Display content type** | Off | Shows the content-type label above the title. |
| **Display publishing date** | On | Shows the publishing date below the title when a date is available. |
| **Description** | Off | Shows the description when enabled and content is available. |
| **Enable CTA content popup** | Off | Opens the CTA destination in a popup on viewports at least 1280 px wide. |

Use **Show action** in the CTA configuration to display the button. Set its label and destination there. The examples use **Read more**; the action label is configurable.

Turning off a default does not reset values already saved on existing cards. Topic and other future metadata fields are not additional controls introduced by this update.

### Title, image and CTA behaviour

The title and preview image use the same destination and action as the CTA across all eight Listing Block card templates: Visualization Card, Card (default), Image Card, Image on left, Image on right, Listing Item, Search Item and Simple Item. This also applies when those templates are used in galleries, carousels or Teaser blocks.

- **Popup off:** the title, image and CTA navigate to the configured CTA destination, including a custom action URL. If no custom destination is supplied, they use the content URL.
- **Popup on, viewport at least 1280 px wide:** all available entry points open the same content popup.
- **Popup on, viewport below 1280 px:** all available entry points navigate to the destination instead of opening a popup.
- **Edit mode:** these entry points do not navigate or open a popup while the editor is configuring the card.

Only elements present in a template are interactive. For example, Simple Item has no preview image, and Image Card combines its overlaid title and image in one link. Hiding the CTA button does not remove the title and image as entry points.

These are multiple entry points to **one action**, not separate destinations. Avoid adding unrelated links that compete with that action.

### Preview images

Use the visualisation listing on Indicator landing pages to resolve Indicator previews:

1. Use the Indicator's own lead or preview image when available.
2. Otherwise, inspect its embedded content in the page's block order and use the first available preview. The first embedded figure should supply the card preview when it has a usable image; do not select a later figure merely because it was returned first by a content request.

Embedded previews can come from Plotly visualisations or static images. The Indicator does not need a SOER-specific `soer_miniature` thumbnail. Existing SOER visualisations remain supported, and additional image types should use the shared preview mechanism rather than introduce duplicate card components.

If an Indicator preview is missing or unexpected, check its lead image, embedded block order and the preview exposed by the first embedded item. The Indicator preview lookup belongs to the **Visualization Cards** listing variation; the shared hyperlink behaviour does not imply that every other listing variation performs the same lookup.

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

**Advanced Search → Maps & Graphs** also uses the existing `visualizationCard` template through `UniversalCard`. Search-lib adapts the search result fields to the shared card model and reuses the listing styles, including the top border; it does not maintain a separate card layout.

Search cards show the content-type label, title (up to four lines), publishing date when available, preview image and **Read more** action. The title, image and CTA navigate to the same content URL, including external destinations. Descriptions, tags and content popups are disabled. Previews come from the search index; missing previews use the shared placeholder, and missing or invalid publishing dates are omitted.

Maps & Graphs retains its responsive four-column card view. Other Advanced Search sections retain their existing default views. **Search Item** remains a separate template in the Listing Block family for horizontal search results.

Review legacy cards for reuse where appropriate. Migrating cards on thematic sites such as WISE Freshwater or Climate-ADAPT, and consolidating their implementations, are follow-up work; documenting this component does not imply those migrations have been completed.
