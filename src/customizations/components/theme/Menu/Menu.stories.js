import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    items: {
      description: 'array of menu tab names',
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

function MenuContent({ items, secondary, pointing, tabular, text, vertical }) {
  const [activeItem, setActiveItem] = useState(
    items.find((item) => item.active === true).key,
  );

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Menu
      secondary={secondary}
      pointing={pointing}
      tabular={tabular}
      text={text}
      vertical={vertical}
    >
      {items.map((item, index) => (
        <Menu.Item
          key={index}
          name={item.key}
          active={activeItem === item.key}
          onClick={handleItemClick}
        >
          {item.name}
        </Menu.Item>
      ))}
    </Menu>
  );
}

const Template = (args) => <MenuContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { key: 'item 1', active: true, name: 'ITEM 1' },
    { key: 'item 2', name: 'ITEM 2' },
    { key: 'item 3', name: 'ITEM 3' },
    { key: 'item 4', name: 'ITEM 4' },
  ],
};

export const Playground = Template.bind({});
Playground.args = {
  items: [
    { key: 'item 1', active: true, name: 'ITEM 1' },
    { key: 'item 2', name: 'ITEM 2' },
    { key: 'item 3', name: 'ITEM 3' },
    { key: 'item 4', name: 'ITEM 4' },
  ],
  secondary: false,
  pointing: false,
  tabular: false,
  text: false,
  vertical: false,
};

Playground.argTypes = {
  secondary: {
    description:
      'a menu can adjust its appearance to de-emphasize its contents',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
  pointing: {
    description: 'a menu can point to show its relationship to nearby content',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
  tabular: {
    description: 'a menu can be formatted to show tabs of information',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
  text: {
    description: 'a menu can be formatted for text content.',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
  vertical: {
    description: 'vertical menu displays elements vertically',
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
