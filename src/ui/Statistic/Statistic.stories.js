import React from 'react';
import { Statistic, Container, Button } from 'semantic-ui-react';
import CountUp, { useCountUp } from 'react-countup';

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
          <a href={element.href} className="ui small statistic">
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

////////////////////////////////// Animation Stories

const AnimationTemplate = (args) => {
  const { start, reset, pauseResume } = useCountUp({
    ref: 'counter',
    start: args.start,
    end: args.end,
    delay: args.delay,
    duration: args.duration,
    decimals: args.decimals,
    decimal: args.decimal,
    prefix: args.prefix,
    suffix: args.suffix,
  });

  return (
    <Container>
      <Statistic.Group {...args}>
        <a href="/#" className="ui small statistic">
          <div className="value secondary" id="counter"></div>
          <div className="label tertiary">Count up label</div>
        </a>
      </Statistic.Group>
      <br />
      <Button secondary onClick={start}>
        Start
      </Button>
      <Button primary onClick={reset}>
        Reset
      </Button>
      <Button primary inverted onClick={pauseResume}>
        Pause/Resume
      </Button>
    </Container>
  );
};

export const Animation = AnimationTemplate.bind({});
Animation.args = {
  start: 0,
  end: 5000,
  delay: 0,
  duration: 5,
  decimals: 0,
  prefix: '',
  suffix: '',
  decimal: ',',
  size: 'small',
  horizontal: false,
};

const CountupStatistics = (args) => (
  <Container>
    <Statistic.Group id="counter" {...args}>
      {args.elements &&
        args.elements.map((element, index) => (
          <a href={element.href} className="ui small statistic">
            <div className={`value ${args.valueVariation}`}>
              <CountUp end={element.value} />
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
export const AnimationGroup = CountupStatistics.bind({});
AnimationGroup.args = {
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
AnimationGroup.argTypes = {
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
