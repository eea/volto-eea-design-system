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
    panes: {
      description: 'tab names and content array',
      table: {
        type: {
          summary: 'object',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
  },
};

function TabContent({ panes, text, attached, tabular, borderless, vertical }) {
  return (
    <Tab
      panes={panes}
      className="eeaTab"
      renderActiveOnly={false}
      menu={{ secondary: true, pointing: true, vertical: vertical }}
    ></Tab>
  );
}

const Template = (args) => <TabContent {...args}></TabContent>;

export const Default = Template.bind({});
Default.args = {
  panes: [
    {
      menuItem: 'Tab 1',
      pane: 'Tab 1 Content',
    },
    {
      menuItem: 'Tab 2',
      pane: 'Tab 2 Content',
    },
    {
      menuItem: 'Tab 3',
      pane: 'Tab 3 Content',
    },
  ],
};

export const Playground = Template.bind({});
Playground.args = {
  panes: [
    {
      menuItem: 'Tab 1',
      pane: 'Tab 1 Content',
    },
    {
      menuItem: 'Tab 2',
      pane: 'Tab 2 Content',
    },
    {
      menuItem: 'Tab 3',
      pane: 'Tab 3 Content',
    },
  ],
  // text: false,
  // attached: false,
  // tabular: false,
  // borderless: false,
  vertical: false,
};

Playground.argTypes = {
  vertical: {
    description: 'vertical tab',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
};
