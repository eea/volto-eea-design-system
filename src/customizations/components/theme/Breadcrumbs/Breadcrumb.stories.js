import React from 'react';
import { Breadcrumb, Container } from 'semantic-ui-react';

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
  <Container style={{backgroundColor:"lightgray",width:"100%",padding:"10px 0"}}>
    <Breadcrumb>
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
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  sections: [
    { key: 'Section 1', content: 'Section 1', link: true },
    { key: 'Section 2', content: 'Section 2', link: true },
    { key: 'Section 3', content: 'Section 3', link: true },
  ],
  icon: 'right chevron',
};
