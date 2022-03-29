import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import ContentAccordion from './ContentAccordion';

export default {
  title: 'Components/Content Accordion',
  component: ContentAccordion,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    content: {
      description: 'Accordion Content Items',
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

function ContentAccordionContainer({ ...args }) {
  const [activeIndex, setActiveIndex] = useState();

  const toggleOpenContentAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <ContentAccordion className={args.readMoreVariant ? 'read more' : ''}>
      {args.content.length > 0 &&
        args.content.map((item, index) => (
          <div key={index}>
            <ContentAccordion.Title
              active={activeIndex === index}
              index={index}
              onClick={toggleOpenContentAccordion}
            >
              {item.title}
              <Icon className="ri-arrow-down-s-line" />
            </ContentAccordion.Title>
            <ContentAccordion.Content active={activeIndex === index}>
              <ContentAccordion.Description>
                {item.description}
              </ContentAccordion.Description>
              <ContentAccordion.Link {...item}>
                {item.linkText}
              </ContentAccordion.Link>
            </ContentAccordion.Content>
          </div>
        ))}
    </ContentAccordion>
  );
}

const Template = (args) => (
  <ContentAccordionContainer {...args}></ContentAccordionContainer>
);

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      title: 'Water and marine environment',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.',
      linkText: 'Read More',
      linkUrl: '/#',
    },
    {
      title: 'Resource efficiency and waste',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.',
      linkText: 'Read More',
      linkUrl: '/#',
    },
    {
      title: 'Air pollution',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.',
      linkText: 'Read More',
      linkUrl: '/#',
    },
  ],
};
