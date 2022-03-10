import React from 'react';
import { Breadcrumb, Container, Image } from 'semantic-ui-react';
import homeSVG from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/home-icon.svg';
import { Link } from 'react-router-dom';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    root: {
      description: 'home button url link',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
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
  <Container>
    <Breadcrumb>
      <Breadcrumb.Section key="home" href={args.root}>
        <Image src={homeSVG} alt="home" />
      </Breadcrumb.Section>
      {args.sections.map((section, index, sections) => [
        index !== 0 && <Breadcrumb.Divider icon={`${args.icon}`} key={index} />,
        index < sections.length - 1 ? (
          <Link key={section.href} to={section.href} className="section">
            {section.content}{' '}
          </Link>
        ) : (
          <Breadcrumb.Section key={section.key} active>
            {section.content}{' '}
          </Breadcrumb.Section>
        ),
      ])}
    </Breadcrumb>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  root: 'https://www.eea.europa.eu/',
  sections: [
    { key: 'Section 1', content: 'Section 1', href: '/#' },
    { key: 'Section 2', content: 'Section 2', href: '/#' },
    { key: 'Section 3', content: 'Section 3', href: '/#' },
  ],
  icon: 'right chevron',
};
