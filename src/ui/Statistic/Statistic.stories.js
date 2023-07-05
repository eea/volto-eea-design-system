import React from 'react';
import { Statistic, Container, Button } from 'semantic-ui-react';
import { CountUp, useCountUp } from '@eeacms/countup';

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
    backgroundVariant: {
      name: 'Background when inverted',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Updates the background color',
      control: { type: 'select' },
      defaultValue: 'tertiary',
      table: {
        defaultValue: { summary: 'tertiary' },
        type: { summary: 'string' },
      },
    },
  },
};

const Template = (args) => (
  <div
    className={`full-width color-bg-${
      args.inverted ? args.backgroundVariant : ''
    }`}
  >
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
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Statistic Label',
  value: 'Value',
  size: 'small',
  horizontal: false,
  linked: false,
  inverted: false,
  backgroundVariant: 'primary',
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
    {
      ...Default.args,
      label:
        'Premature deaths were attributed to chronic exposure to fine particulate matter',
      value: '307,000',
    },
    {
      ...Default.args,
      label:
        'Premature deaths were attributed to chronic nitrogen dioxide exposure',
      value: '40,400',
      href: '/#',
    },
    {
      ...Default.args,
      label: 'Premature deaths were attributed to acute ozone exposure',
      value: '16,800',
      href: '/#',
    },
  ],
  widths: 'three',
  size: 'small',
  horizontal: false,
  inverted: false,
  backgroundVariant: 'primary',
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
    control: {
      type: 'select',
      options: ['one', 'two', 'three', 'four', 'five'],
    },
    description: 'statistic column size',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
};

const CustomTemplate = (args) => (
  <div
    className={`full-width color-bg-${
      args.inverted ? args.backgroundVariant : ''
    }`}
  >
    <Container>
      <Statistic.Group {...args}>
        {args.elements &&
          args.elements.map((element, index) => (
            <a href={element.href} className="ui small statistic">
              <div className={`value ${args.valueVariation}`}>
                {element.value}
              </div>
              <div className={`label ${args.labelVariation}`}>
                {element.label}
              </div>
              <div className={`slate text-center ${args.extraVariation}`}>
                {element.slate}
              </div>
            </a>
          ))}
      </Statistic.Group>
    </Container>
  </div>
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
  widths: 'three',
  horizontal: false,
  size: 'small',
  valueVariation: 'secondary',
  labelVariation: 'tertiary',
  extraVariation: 'tertiary',
  inverted: false,
  backgroundVariant: 'primary',
};
Custom.argTypes = {
  widths: {
    control: {
      type: 'select',
      options: ['one', 'two', 'three', 'four', 'five'],
    },
    description: 'statistic column size',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
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
  extraVariation: {
    name: 'Extra info variation',
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

////////////////////////////////// Animation Stories

const AnimationTemplate = (args) => {
  const [run, setRun] = React.useState(true);

  const { reset, value } = useCountUp({
    start: args.start,
    end: args.end,
    duration: args.duration,
    decimalPlaces: args.decimals,
    decimalSeparator: ',',
    formatter: (value) => {
      let prefix = args.prefix || '';
      let suffix = args.suffix || '';
      return prefix + value.toFixed(args.decimals) + suffix;
    },
    isCounting: run,
    useIntersection: false,
  });

  return (
    <Container>
      <Statistic.Group {...args}>
        <a href="/#" className="ui small statistic">
          <div className="value secondary">{value}</div>
          <div className="label tertiary">Count up label</div>
        </a>
      </Statistic.Group>
      <br />
      <Button
        secondary
        onClick={() => {
          reset();
          setRun(true);
        }}
      >
        Start
      </Button>
      <Button
        primary
        onClick={() => {
          reset();
          setRun(false);
        }}
      >
        Reset
      </Button>
      <Button
        primary
        inverted
        onClick={() => {
          setRun(!run);
        }}
      >
        Pause/Resume
      </Button>
    </Container>
  );
};

export const Animation = AnimationTemplate.bind();

Animation.args = {
  start: 0,
  end: 5000,
  duration: 5,
  decimals: 0,
  decimalSeparator: ',',
};
Animation.parameters = { controls: { exclude: ['Background when inverted'] } };

const CountupStatistics = (args) => (
  <div
    className={`full-width color-bg-${
      args.inverted ? args.backgroundVariant : ''
    }`}
  >
    <Container>
      <Statistic.Group id="counter" {...args}>
        {args.elements &&
          args.elements.map((element, index) => (
            <a href={element.href} className="ui small statistic">
              <div className={`value ${args.valueVariation}`}>
                <CountUp end={element.value} isCounting={true} />
              </div>
              <div className={`label ${args.labelVariation}`}>
                {element.label}
              </div>
              <div className={`slate text-center ${args.extraVariation}`}>
                {element.slate}
              </div>
            </a>
          ))}
      </Statistic.Group>
    </Container>
  </div>
);
export const AnimationGroup = CountupStatistics.bind({});
AnimationGroup.args = {
  elements: [
    {
      ...Default.args,
      label: 'label 1',
      value: 50,
      slate: 'Text from slate',
      href: '/#',
    },
    {
      ...Default.args,
      label: 'label 2',
      value: 500,
      slate: 'Text from slate',
      href: '/#',
    },
    {
      ...Default.args,
      label: 'label 3',
      value: 5000,
      slate: 'Text from slate',
      href: '/#',
    },
  ],
  widths: 'three',
  size: 'small',
  horizontal: false,
  valueVariation: 'secondary',
  labelVariation: 'tertiary',
  extraVariation: 'tertiary',
  inverted: false,
  backgroundVariant: 'primary',
};
AnimationGroup.argTypes = {
  widths: {
    control: {
      type: 'select',
      options: ['one', 'two', 'three', 'four', 'five'],
    },
    description: 'statistic column size',
    table: {
      type: {
        summary: 'string',
      },
      defaultValue: {
        summary: ' "" ',
      },
    },
  },
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
  extraVariation: {
    name: 'Extra info variation',
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
