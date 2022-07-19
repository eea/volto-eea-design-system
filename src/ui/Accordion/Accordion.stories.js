import React, { useState } from 'react';
import { Accordion, Icon, Container } from 'semantic-ui-react';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    variant: {
      name: 'Variation',
      defaultValue: 'primary',
      options: ['default', 'primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      description: 'call to action variation',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    toggle1: {
      description: 'Text of the accordion toggler',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '""',
        },
      },
    },
    toggle2: {
      description: 'Text of the accordion toggler',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '""',
        },
      },
    },
    toggle3: {
      description: 'Text of the accordion toggler',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '""',
        },
      },
    },
    content1: {
      description: 'Text of the hidden content',
      table: {
        type: {
          summary: 'array',
        },
        defaultValue: {
          summary: '""',
        },
      },
    },
    content2: {
      description: 'Text of the hidden content',
      table: {
        type: {
          summary: 'array',
        },
        defaultValue: {
          summary: '""',
        },
      },
    },
    content3: {
      description: 'Text of the hidden content',
      table: {
        type: {
          summary: 'array',
        },
        defaultValue: {
          summary: '""',
        },
      },
    },
  },
};

function AccordionContainer({ ...args }) {
  const [activeIndex, setActiveIndex] = useState();

  const toggleOpenAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <Container>
      <Accordion className={args.variant}>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={toggleOpenAccordion}
        >
          {args.toggle1}
          <Icon className="ri-arrow-down-s-line" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          {args.content1.length > 0 &&
            args.content1.map((item, index) => <p key={index}>{item}</p>)}
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={toggleOpenAccordion}
        >
          {args.toggle2}
          <Icon className="ri-arrow-down-s-line" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          {args.content2.length > 0 &&
            args.content2.map((item, index) => <p key={index}>{item}</p>)}
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={toggleOpenAccordion}
        >
          {args.toggle3}
          <Icon className="ri-arrow-down-s-line" />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          {args.content3.length > 0 &&
            args.content3.map((item, index) => <p key={index}>{item}</p>)}
        </Accordion.Content>
      </Accordion>
    </Container>
  );
}

const Template = (args) => <AccordionContainer {...args}></AccordionContainer>;

export const Default = Template.bind({});
Default.args = {
  variant: 'secondary',
  toggle1: 'Water and marine environment',
  toggle2: 'Resource efficiency and waste',
  toggle3: 'Air pollution',
  content1: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.',
  ],
  content2: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.',
  ],
  content3: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.',
  ],
};
