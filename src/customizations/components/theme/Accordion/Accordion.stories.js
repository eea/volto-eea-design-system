import { React } from 'react';
import { AccordionEEA } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: AccordionEEA,
  argTypes: {
    variant: {
      options: ['default', 'styled', 'inverted segment'],
      control: { type: 'select' },
    },
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
