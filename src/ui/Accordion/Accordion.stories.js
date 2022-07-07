import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
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
    <Accordion>
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
  );
}

const Template = (args) => <AccordionContainer {...args}></AccordionContainer>;

export const Default = Template.bind({});
Default.args = {
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

const FAQ_CONTENT = `
Elit suspendisse a viverra consequat euismod. Leo ultricies enim pharetra viverra mi cursus lobortis nisl, ornare. Eu imperdiet tincidunt fames commodo. Sit mauris blandit ultrices magnis cras odio consequat, eu. Nibh est massa arcu sollicitudin.
Vitae et ac turpis pharetra. Sit feugiat porta risus sit risus etiam. Dignissim tincidunt aliquet diam fermentum vitae egestas duis. Erat sit pellentesque in urna nibh pulvinar. Cras sed vel purus et. Donec turpis pulvinar duis aenean urna.
Et vestibulum sociis mauris sit. Molestie tortor rutrum adipiscing rhoncus vehicula nunc. Quis sem a vel egestas posuere erat. Odio nulla blandit suspendisse pulvinar quis commodo etiam. Non vitae, felis enim velit amet. 
Aliquam dignissim eget feugiat donec fringilla consequat sed. Sollicitudin habitasse varius bibendum integer integer. Porttitor tincidunt varius augue auctor elit. Lacus ut commodo turpis ultrices magna vitae scelerisque pellentesque. 
Pretium faucibus egestas sit at cras bibendum natoque et. Est pulvinar eget ornare amet morbi massa ut at auctor. Eu sit aliquet pharetra neque, blandit nam enim eget. Integer sapien, varius ut volutpat mi risus purus in eget. 
Vitae, ultrices nunc justo, molestie. Eu sit nunc condimentum habitant facilisis porttitor.
`;

function FAQAccordionContainer({ ...args }) {
  const [activeIndex, setActiveIndex] = useState();

  const toggleOpenAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <Accordion className="faq">
      <Accordion.Title
        active={activeIndex === 0}
        index={0}
        onClick={toggleOpenAccordion}
      >
        {args.accordionToggle1}
        <Icon className="ri-arrow-down-s-line" />
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        {FAQ_CONTENT}
      </Accordion.Content>
      <Accordion.Title
        active={activeIndex === 1}
        index={1}
        onClick={toggleOpenAccordion}
      >
        {args.accordionToggle2}
        <Icon className="ri-arrow-down-s-line" />
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
        {FAQ_CONTENT}
      </Accordion.Content>
      <Accordion.Title
        active={activeIndex === 2}
        index={2}
        onClick={toggleOpenAccordion}
      >
        {args.accordionToggle3}
        <Icon className="ri-arrow-down-s-line" />
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 2}>
        {FAQ_CONTENT}
      </Accordion.Content>
    </Accordion>
  );
}

const FAQAccordionTemplate = (args) => (
  <FAQAccordionContainer {...args}></FAQAccordionContainer>
);

export const FAQAccordion = FAQAccordionTemplate.bind({});

FAQAccordion.args = {
  accordionToggle1: 'Older Versions',
  accordionToggle2: 'Permalinks',
  accordionToggle3: 'Air pollution',
  content: FAQ_CONTENT,
};
