import React from 'react';
import { Tab } from 'semantic-ui-react';

export default {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    //   tabular: {
    //     control: { type: 'inline-radio' },
    //     options: [true, 'left','right'],
    //   },
  },
};

function TabContent({
  panes,
  pointing,
  secondary,
  text,
  attached,
  tabular,
  borderless,
  color,
  vertical,
}) {
  return (
    <Tab
      panes={panes}
      menu={{
        color,
        pointing: pointing,
        secondary: secondary,
        text: text,
        attached: attached,
        tabular: tabular,
        borderless: borderless,
        vertical: vertical,
      }}
    ></Tab>
  );
}

const Template = (args) => <Tab className="eeaTab" menu={{ secondary: true, pointing: true }} {...args}></Tab>;

export const Default = Template.bind({});
Default.args = {
  panes: [
    {
      menuItem: 'Tab 1',
      render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
    },
    {
      menuItem: 'Tab 2',
      render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
    },
    {
      menuItem: 'Tab 3',
      render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>,
    },
  ],
};

export const Playground = Template.bind({});
Playground.args = {
  panes: [
    {
      menuItem: 'Tab 1',
      render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
    },
    {
      menuItem: 'Tab 2',
      render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
    },
    {
      menuItem: 'Tab 3',
      render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>,
    },
  ],
  pointing: false,
  secondary: false,
  text: false,
  attached: false,
  tabular: false,
  borderless: false,
  vertical: false,
};
