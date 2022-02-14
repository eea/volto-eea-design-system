import React from 'react';
import { Breadcrumb, Container, Image } from 'semantic-ui-react';
import homeSVG from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/home-icon.svg';

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
  <div className="eea-breadcrumb">
    <Container>
      <Breadcrumb>
        <Breadcrumb.Section key="home" href="https://www.eea.europa.eu/">
          <Image src={homeSVG} alt="home" />
        </Breadcrumb.Section>
        {args.sections.map((section, index) => (
          <>
            <Breadcrumb.Section
              key={section.key}
              href={section.href}
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
  </div>
);

export const Default = Template.bind({});
Default.args = {
  sections: [
    { key: 'Section 1', content: 'Section 1', href: '/#' },
    { key: 'Section 2', content: 'Section 2', href: '/#' },
    { key: 'Section 3', content: 'Section 3', href: '' },
  ],
  icon: 'right chevron',
};
