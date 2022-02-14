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
    content: {
      description: 'Accordion content object',
      table: {
        type: {
          summary: 'Object',
        },
        defaultValue: {
          summary: '""',
        },
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

function AccordionContainer({ content, ...args }) {
  const [activeIndex, setActiveIndex] = useState();

  const toggleOpenAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <Accordion className="eea-accordion" {...args}>
      {content.map((item, index) => (
        <div className="eea-accordion-item" key={index}>
          <Accordion.Title
            active={activeIndex === index}
            index={index}
            onClick={toggleOpenAccordion}
          >
            <Icon name="chevron circle down" />
            {item.title}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index}>
            <p>{item.content}</p>
          </Accordion.Content>
        </div>
      ))}
    </Accordion>
  );
}

function AccordionContainer2({ ...args }) {
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
        <Icon name="chevron down" />
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
        <Icon name="chevron down" />
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
        <Icon name="chevron down" />
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 2}>
        {args.content3.length > 0 &&
          args.content3.map((item, index) => <p key={index}>{item}</p>)}
      </Accordion.Content>
    </Accordion>
  );
}

const Template2 = (args) => (
  <AccordionContainer2 {...args}></AccordionContainer2>
);

export const Default2 = Template2.bind({});
Default2.args = {
  toggle1: 'Accordion Title 1',
  toggle2: 'Accordion Title 2',
  toggle3: 'Accordion Title 3',
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
  // content: [
  //   {
  //     title: 'Accordion Title 1',
  //     content:
  //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.</p>
  //   },
  //   {
  //     title: 'Accordion Title 2',
  //     content:
  //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.</p>
  //   },
  //   {
  //     title: 'Accordion Title 3',
  //     content: (
  //       <div>
  //         <p>
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi
  //           mauris enim felis eget id sed tristique. At laoreet ligula
  //           pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non
  //           quis libero, odio elementum lectus lectus ullamcorper elit. In
  //           quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est
  //           purus elementum eget.
  //         </p>
  //         <p>
  //           Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa
  //           mauris, mauris, vel elementum adipiscing.
  //         </p>
  //       </div>
  //     ),
  //   },
  // ],
};

const Template = (args) => <AccordionContainer {...args}></AccordionContainer>;

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      title: 'Accordion Title 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.',
    },
    {
      title: 'Accordion Title 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.',
    },
    {
      title: 'Accordion Title 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.',
    },
  ],
};
