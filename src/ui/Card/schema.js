export const getCardSchema = () => ({
  title: 'Image Card',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'title',
        'meta',
        'text',
        'attachedimage',
        'link',
        'linkTitle',
        'copyright',
      ],
    },
  ],

  properties: {
    title: {
      type: 'string',
      title: 'Title',
    },
    meta: {
      widget: 'textarea',
      title: 'Meta data',
    },
    text: {
      widget: 'textarea',
      title: 'Text',
    },
    link: {
      widget: 'url',
      title: 'Link',
    },
    linkTitle: {
      type: 'string',
      title: 'Link title',
    },
    attachedimage: {
      widget: 'attachedimage',
      title: 'Image',
    },
    copyright: {
      widget: 'textarea',
      title: 'Copyright',
    },
  },

  required: ['attachedimage'],
});

export const getSchemaExtender = (schema, data, intl) => {
  return {
    ...schema,
    fieldsets: [
      ...schema.fieldsets,
      {
        id: 'cards_grid',
        title: 'Cards grid',
        fields: ['gridSize'],
      },
    ],
    properties: {
      ...schema.properties,
      gridSize: {
        title: 'Grid Size',
        choices: [
          ['one', 'One'],
          ['two', 'Two'],
          ['three', 'Three'],
          ['four', 'Four'],
        ],
        factory: 'Choice',
        type: 'string',
      },
    },
  };
};
