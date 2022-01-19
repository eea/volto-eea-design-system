import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['right chevron', 'right arrow', 'caret right'],
      description: 'breadcrumb divider icon',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'right chevron',
        },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'],
      description: 'breadcrumb size',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'small',
        },
      },
    },
    sections: {
      description: 'breadcrumb tabs',
      table: {
        type: {
          summary: 'Object',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
  },
};

//const Template = (args) => <Breadcrumb {...args}></Breadcrumb>;

const Template = (args) => (
  <Breadcrumb size={args.size}>
    {args.sections.map((section, index) => (
      <>
        <Breadcrumb.Section
          key={section.key}
          link={section.link}
          active={index === args.sections.length - 1}
        >
          {section.content}{' '}
        </Breadcrumb.Section>
        {index !== args.sections.length - 1 && (
          <Breadcrumb.Divider icon={`${args.icon}`} />
        )}
      </>
    ))}
  </Breadcrumb>
);

export const Default = Template.bind({});
Default.args = {
  sections: [
    { key: 'Section 1', content: 'Section 1', link: true },
    { key: 'Section 2', content: 'Section 2', link: true },
    { key: 'Section 3', content: 'Section 3', link: true },
  ],
  icon: 'right chevron',
  size: 'small',
};
