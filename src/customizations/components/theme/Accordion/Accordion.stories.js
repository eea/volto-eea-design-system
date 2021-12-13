import { injectIntl } from 'react-intl';
import { React, useState } from 'react';
import { Accordion } from 'semantic-ui-react';
import { AccordionEEA } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: AccordionEEA,
  argTypes: {
    className: {
      options: ['styled', 'fluid'],
      control: { type: 'select' },
    },
    content: [
      { title: '1', content: 'content 1' },
      { title: '2', content: 'content 2' },
    ],
  },
};

const Template = (args) => <AccordionEEA {...args}></AccordionEEA>;

export const Default = Template.bind({});
Default.args = {
  content: [
    { title: '1', content: 'content 1' },
    { title: '2', content: 'content 2' },
  ],
  fluid: true,
  styled: true,
};
