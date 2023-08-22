import React, { useState } from 'react';
import { Accordion, Icon, Container, Input } from 'semantic-ui-react';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    variant: {
      name: 'Variation',
      defaultValue: 'primary',
      options: ['default', 'primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    title_size: {
      name: 'Title size',
      defaultValue: 'primary',
      options: ['no value', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    enable_filtering: {
      name: 'Enable filtering',
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
  },
};

function AccordionContainer({ ...args }) {
  const [activeIndex, setActiveIndex] = useState([0]);
  const [filterValue, setFilterValue] = useState('');

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  const handleFilteredValueChange = (value) => {
    setFilterValue(value);
  };

  return (
    <Container>
      <div className="accordion-block">
        {args.enable_filtering && (
          <Accordion className={args.variant}>
            <Accordion.Title className={'filter'}>
              <Input
                fluid
                className="input-accordion-title"
                transparent
                placeholder="Type to filter..."
                value={filterValue}
                onChange={(e) => handleFilteredValueChange(e.target.value)}
              />
              <Icon
                className={filterValue ? 'ri-close-line' : 'ri-filter-3-line'}
                onClick={() => handleFilteredValueChange('')}
              />
            </Accordion.Title>
          </Accordion>
        )}
        {args.panels
          .filter(
            (panel) =>
              !args.enable_filtering ||
              filterValue === '' ||
              (filterValue !== '' &&
                panel.title?.toLowerCase().includes(filterValue.toLowerCase())),
          )
          .map((panel, index) => {
            const active = activeIndex === index;
            return (
              <Accordion className={args.variant} key={index}>
                <Accordion.Title
                  index={index}
                  tabIndex={0}
                  active={active}
                  role="button"
                  aria-expanded={activeIndex === index}
                  onClick={handleClick}
                  as={args.title_size === 'no value' ? '' : args.title_size}
                  onKeyDown={(e) => {
                    if (e.nativeEvent.keyCode === 13) {
                      handleClick(e, { index });
                    }
                  }}
                >
                  <span>{panel.title}</span>
                  <Icon
                    className={
                      active ? 'ri-arrow-down-s-line' : 'ri-arrow-up-s-line'
                    }
                  />
                </Accordion.Title>
                <Accordion.Content active={active}>
                  {panel.content}
                </Accordion.Content>
              </Accordion>
            );
          })}
      </div>
    </Container>
  );
}

const Template = (args) => <AccordionContainer {...args}></AccordionContainer>;
export const Default = Template.bind({});
Default.args = {
  variant: 'secondary',
  title_size: 'no value',
  enable_filtering: false,
  panels: [
    {
      title: 'Water and marine environment',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.',
    },
    {
      title: 'Resource efficiency and waste',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.',
    },
    {
      title: 'Air pollution',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nisi mauris enim felis eget id sed tristique. At laoreet ligula pretium, pulvinar. Accumsan egestas ultricies erat sed. Eget non quis libero, odio elementum lectus lectus ullamcorper elit. In quam pulvinar amet, habitasse mi lorem nunc. Sed sed elementum est purus elementum eget. Elementum tortor at nulla nunc, tempor rhoncus, bibendum. Massa mauris, mauris, vel elementum adipiscing.',
    },
  ],
};
