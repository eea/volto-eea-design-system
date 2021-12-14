import { injectIntl } from 'react-intl';
import { React, useState } from 'react';
import { Accordion } from 'semantic-ui-react';
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
    { title: '1 Accordion Title', content: 'content 1' },
    { title: '2 Accordion Title', content: 'content 2' },
  ],
  variant: 'default',
  fluid: true,
  styled: true,
};
