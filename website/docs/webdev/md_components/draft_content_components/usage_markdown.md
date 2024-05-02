The Draft Content component is a React component that adds a visual indicator to the page when the current content is in a draft or unpublished state.  
This is useful for content editors and administrators to
easily distinguish between published and unpublished content.

## Functionality

The component checks the current content's review state, effective date, and parent content's review state to determine if the content should be considered published or not. If the content is not published, the component adds a CSS class (`wf-state-is-draft`) to the body element of the view page. This CSS class is used to apply a specific background to indicate the draft state.

The component handles various cases to determine if the content is published or not in the following order:

- If the content has an effective date set in the future, regardless of the review state, it is considered unpublished.
- If the content's review state is explicitly set to "published".
- If the content's review state is null, but its parent's review state is "published", (e.g., an image in a published folder).
- If the content's review state is null, and there is no parent (e.g., the Plone site root).
- If the content's review state is null, and the parent's review state is also null (e.g., an image in the Plone site root).

## Usage

The DraftBackground component is typically used in the main layout or template of the Volto application.  
It should be rendered on every page to ensure that the draft state indicator is displayed consistently across the entire application.

## Styling

The `wf-state-is-draft` CSS class added by the DraftBackground component can be styled to provide a visual indication of the draft state. For example, you could add a semi-transparent overlay or a watermark to the page when the content is in a draft state.

This example adds a semi-transparent "DRAFT" watermark to the center of the page when the `wf-state-is-draft` class is present on the body element.
