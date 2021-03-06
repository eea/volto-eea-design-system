import React from 'react';
import KeyContent from './KeyContent';
// eslint-disable-next-line import/no-unresolved

export default {
  title: 'Components/Key Content',
  component: KeyContent,
  argTypes: {
    title: {
      description: 'Key Content title',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    items: {
      description: 'array of list content',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: ' "" ' },
      },
    },
  },
};

const DefaultTemplate = (args) => (
  <KeyContent {...args}>
    <KeyContent.Title>{args.title}</KeyContent.Title>
    <KeyContent.List {...args}></KeyContent.List>
  </KeyContent>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Lorem ipsum',
  items: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa volutpat, feugiat lacus libero morbi dui. Ipsum vestibulum, faucibus aliquam pharetra ullamcorper accumsan. Mauris et blandit magna velit aliquam mattis tristique cursus. Gravida quis porta dictum sed nisl gravida. Dictum sapien purus ultrices leo felis quis.',
    'Turpis feugiat felis id imperdiet imperdiet suspendisse. Sed pulvinar nisi, convallis sed non non eu, erat. ',
    'Felis malesuada in elementum turpis. Enim, eu adipiscing sit fames ornare amet, suscipit. Neque, faucibus facilisi egestas vitae viverra tristique cum viverra elit. Nunc fermentum bibendum fames ultricies turpis habitant. ',
  ],
};
