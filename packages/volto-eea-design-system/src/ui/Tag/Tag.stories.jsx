import React from 'react';
import Tag from './Tag';
import { Container } from 'semantic-ui-react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureStore();

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    title: {
      name: 'title',
      description: 'Tag main text',
      type: { name: 'string', required: true },
    },
  },
};

export const Default = (args) => (
  <Provider store={store}>
    <Container>
      <Tag href={args.link}>{args.title}</Tag>
    </Container>
  </Provider>
);

Default.args = {
  title: 'subcategory 1',
  link: '/#',
};
