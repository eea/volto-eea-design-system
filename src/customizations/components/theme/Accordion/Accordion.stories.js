import { React } from 'react';
import { AccordionEEA } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: AccordionEEA,
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
  },
};

const Template = (args) => <AccordionEEA {...args}></AccordionEEA>;

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
