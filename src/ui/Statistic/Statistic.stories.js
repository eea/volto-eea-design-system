import React from 'react';
import { Statistic, Container } from 'semantic-ui-react';

export default {
  title: 'Components/Statistic',
  component: Statistic,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['mini', 'tiny', 'small', 'large', 'huge'],
      },
      description: 'statistic size',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
    horizontal: {
      description: 'present its measurement horizontally',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

const Template = (args) => (
  <Container>
    <Statistic.Group {...args}>
      {args.elements &&
        args.elements.map((element, index) => (
          <Statistic
            as="a"
            href={element.href}
            key={index}
            {...element}
          ></Statistic>
        ))}
      {!args.elements && (
        <>
          {args.linked ? (
            <Statistic as="a" href="/#" {...args}></Statistic>
          ) : (
            <Statistic {...args}></Statistic>
          )}{' '}
        </>
      )}
    </Statistic.Group>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Statistic Label',
  value: 'Value',
  horizontal: false,
  size: 'small',
  linked: false,
};

Default.argTypes = {
  label: {
    description: 'label content of the Statistic',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  value: {
    description: 'value content of the statistic',
    table: {
      type: {
        summary: 'custom',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  linked: {
    description: 'Add link to statistic',
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

export const Group = Template.bind({});
Group.args = {
  elements: [
    { ...Default.args, label: 'label 1', value: '50' },
    { ...Default.args, label: 'label 2', value: '500', href: '/#' },
    { ...Default.args, label: 'label 3', value: '5000', href: '/#' },
  ],
  horizontal: false,
  inverted: false,
  widths: 'three',
};

Group.argTypes = {
  elements: {
    description: 'array of different statistics',
    table: {
      type: {
        summary: 'object',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
  widths: {
    description: 'a statistic group can have its items divided evenly',
    table: {
      type: {
        summary: 'number',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
};

const CustomTemplate = (args) => (
  <Container>
    <Statistic.Group {...args}>
      {args.elements &&
        args.elements.map((element, index) => (
          <a href={element.href} class="ui small statistic">
            <div className={`value ${args.valueVariation}`}>
              {element.value}
            </div>
            <div className={`label ${args.labelVariation}`}>
              {element.label}
            </div>
            <div className={`slate text-center ${args.slateVariation}`}>
              {element.slate}
            </div>
          </a>
        ))}
    </Statistic.Group>
  </Container>
);
export const Custom = CustomTemplate.bind({});
Custom.args = {
  elements: [
    {
      ...Default.args,
      label: 'label 1',
      value: '50',
      slate: 'Text from slate',
      href: '/#',
    },
    {
      ...Default.args,
      label: 'label 2',
      value: '500',
      slate: 'Text from slate',
      href: '/#',
    },
    {
      ...Default.args,
      label: 'label 3',
      value: '5000',
      slate: 'Text from slate',
      href: '/#',
    },
  ],
  size: 'small',
  widths: 'three',
  inverted: false,
  horizontal: false,
  valueVariation: 'secondary',
  labelVariation: 'tertiary',
  slateVariation: 'tertiary',
};
Custom.argTypes = {
  valueVariation: {
    name: 'Value variation',
    defaultValue: 'tertiary',
    options: ['primary', 'secondary', 'tertiary'],
    control: { type: 'select' },
    description: 'Text color variation',
    table: {
      category: 'Color variations',
      defaultValue: { summary: 'tertiary' },
      type: { summary: 'string' },
    },
  },
  labelVariation: {
    name: 'Value variation',
    defaultValue: 'tertiary',
    options: ['primary', 'secondary', 'tertiary'],
    control: { type: 'select' },
    description: 'Text color variation',
    table: {
      category: 'Color variations',
      defaultValue: { summary: 'tertiary' },
      type: { summary: 'string' },
    },
  },
  slateVariation: {
    name: 'Slate variation',
    defaultValue: 'tertiary',
    options: ['primary', 'secondary', 'tertiary'],
    control: { type: 'select' },
    description: 'Text color variation',
    table: {
      category: 'Color variations',
      defaultValue: { summary: 'tertiary' },
      type: { summary: 'string' },
    },
  },
};
