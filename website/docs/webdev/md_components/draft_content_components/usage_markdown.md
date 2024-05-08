The Draft Content component is a React component that adds a visual indicator to the page when the current content is in a draft or unpublished state.  
This is useful for content editors and administrators to
easily distinguish between published and unpublished content.

## Functionality

The component checks the current content's review state, effective date, and parent content's review state to determine if the content should be considered published or not. If the content is not published, the component adds a CSS class (`wf-state-is-draft`) to the body element of the view page. This CSS class is used to apply a specific background to indicate the draft state.

The component handles the following cases to determine if the draft image should be displayed:
- If the content has an effective date set in the future, regardless of the review state, it is considered unpublished.
- If the content has a review state which isn't explicitly set to "published" 

The component handles various cases to determine if the draft image should not be displayed:
- If the content's review state is explicitly set to "published".
- If the content's review state is null, but its parent's review state is "published", (e.g., an image in a published folder).
- If the content's review state is null, and there is no parent (e.g., the Plone site root).
- If the content's review state is null, and the parent's review state is also null (e.g., an image in the Plone site root).
- If the content view is not a view page (e.g., the /edit or /content pages).

## Usage

The Draft Content component is typically used in the main layout or template of the Volto application.  
It should be rendered on every page to ensure that the draft state indicator is displayed consistently across the entire application.

## Do's

- Use the Draft Content component on every view page of your Volto application to ensure consistent draft state indication across the entire site.
- Ensure that the CSS class `wf-state-is-draft` is applied to the body element when the content is in a draft or unpublished state, and remove it when the content is published.

## Don'ts

- Don't use the Draft Content component on pages where you don't want to display the draft state indicator.
- Don't modify the logic for determining the draft state without considering all the edge cases and potential implications.
