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
    variant: {
      options: ['default', 'styled', 'inverted segment'],
      control: { type: 'select' },
      description: "Accordion style class",
      table: {
        type: { 
          summary: 'string', 
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
    content:{
      description:"Accordion content object",
      table: {
        type: { 
          summary: 'Object', 
        },
        defaultValue: {
          summary: '\"\"',
        },
      },
    },
    fluid:{
      description:"take width of container",
      table: {
        type: { 
          summary: 'boolean', 
        },
        defaultValue: {
          summary: false,
        },
      },
    }
  },
};

const Template = (args) => <AccordionEEA {...args}></AccordionEEA>;

export const Default = Template.bind({});
Default.args = {
  content: [
    { title: 'Accordion Title 1', content: 'content 1' },
    { title: 'Accordion Title 2', content: 'content 2' },
  ],
  variant: 'default',
  fluid: true,
};
