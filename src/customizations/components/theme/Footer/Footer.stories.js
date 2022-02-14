import React from 'react';
import Footer from './Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
  argTypes: {},
};

const Template = (args) => <Footer {...args}></Footer>;

export const Default = Template.bind({});
Default.args = {};
