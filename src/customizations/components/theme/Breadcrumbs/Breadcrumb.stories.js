import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

export default {
  title: 'Components/Breadcrumb/Breadcrumb 2',
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
    },
    size: {
      control: { type: 'select' },
      options: ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'],
    },
  },
};

//const Template = (args) => <Breadcrumb {...args}></Breadcrumb>;

const Template = (args) => 
      <Breadcrumb size={args.size}>
          {args.sections.map((section,index) => (
            <>
              <Breadcrumb.Section key={section.key} link={section.link} active={index === args.sections.length - 1}>{section.content} </Breadcrumb.Section>
              {index !== args.sections.length - 1 && <Breadcrumb.Divider icon={`${args.icon}`} />}
            </>
          ))}
      </Breadcrumb>;

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
