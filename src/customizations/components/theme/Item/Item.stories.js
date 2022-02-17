import React from 'react';
import { Item } from 'semantic-ui-react';
import EUflag from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/europe-flag.svg';

export default {
  title: 'Components/Item',
  component: Item,
  argTypes: {},
};

const Template = (args) => <Item.Group {...args}></Item.Group>;

export const DefaultItem = (args) => (
  <Item.Group>
    <Item {...args}></Item>
  </Item.Group>
);
DefaultItem.args = {
  header: 'Header',
  image: EUflag,
  description: 'Description',
  meta: 'Metadata',
  extra: 'Extra',
};

export const DefaultGroup = Template.bind({});
DefaultGroup.args = {
  items: [
    {
      childKey: 0,
      header: 'Header',
      image: EUflag,
      description: 'Description',
      meta: 'Metadata',
      extra: 'Extra',
    },
    {
      childKey: 1,
      header: 'Header',
      image: EUflag,
      description: 'Description',
      meta: 'Metadata',
      extra: 'Extra',
    },
  ],
  divided: false,
  relaxed: false,
  unstackable: false,
  link: false,
};
