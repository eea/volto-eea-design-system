import React from 'react';
import { Item, Container, Grid, Icon } from 'semantic-ui-react';

import GlobeEco from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Svg/globe-eco.svg';
import Sustainable from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Svg/sustainable.svg';
import DataAnalytics from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Svg/data-analytics.svg';
import Network from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Svg/network.svg';
import Knowledge from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Svg/knowledge.svg';

export default {
  title: 'Components/Item/Item group with icons',
  component: Item,
  argTypes: {
    stackable: {
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    textAlign: {
      name: 'text align',
      options: ['left', 'center', 'right'],
      control: { type: 'select' },
      defaultValue: 'left',
      table: {
        defaultValue: { summary: 'left' },
        type: { summary: 'string' },
      },
    },
    mediaType: {
      name: 'media type',
      options: ['image', 'icon'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'image' },
      },
    },
    imageSize: {
      control: { type: 'select' },
      options: ['tiny', 'small', 'medium', 'big'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    verticalAlign: {
      name: 'vertical align',
      options: ['top', 'middle', 'bottom'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'middle' },
      },
    },
    colorVariation: {
      name: 'icon variation',
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'secondary' },
      },
    },
  },
};

function SingleItem({
  mediaType,
  imageUrl,
  icon,
  imageSize,
  colorVariation,
  description,
  verticalAlign,
  stackable,
  textAlign,
}) {
  return (
    <Item className={`${stackable ? ' stackable' : ''}`}>
      {mediaType === 'image' ? (
        <Item.Image
          className={`ui ${imageSize}`}
          src={imageUrl}
          alt="item image"
        />
      ) : (
        <Icon className={`${imageSize} ${icon} ${colorVariation}`} />
      )}
      <Item.Content
        verticalAlign={verticalAlign}
        className={`text-${textAlign}`}
      >
        <Item.Description>{description}</Item.Description>
      </Item.Content>
    </Item>
  );
}

// Single item
export const DefaultItem = (args) => (
  <Container>
    <Item.Group unstackable className="row">
      <SingleItem {...args}></SingleItem>
    </Item.Group>
  </Container>
);
DefaultItem.args = {
  mediaType: 'image',
  imageUrl: GlobeEco,
  icon: 'ri-leaf-line',
  imageSize: 'medium',
  verticalAlign: 'middle',
  colorVariation: 'secondary',
  stackable: false,
  textAlign: 'left',
  description:
    'Support Europe’s transition to a sustainable future with evidence-based knowledge and data.',
};
DefaultItem.argTypes = {
  imageUrl: {
    name: 'image URL',
    control: 'text',
    if: { arg: 'mediaType', eq: 'image' },
  },
  icon: {
    name: 'Icon class',
    control: 'text',
    if: { arg: 'mediaType', eq: 'icon' },
  },
  description: {
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
    },
  },
};

function ItemGroup({
  mediaType,
  imageSize,
  colorVariation,
  verticalAlign,
  ColumnLeft,
  ColumnRight,
  stackable,
  textAlign,
}) {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={12} tablet={6} computer={6}>
            <Item.Group unstackable className="row">
              {ColumnLeft.map((item) => (
                <SingleItem
                  key={item.childKey}
                  {...item}
                  verticalAlign={verticalAlign}
                  mediaType={mediaType}
                  imageSize={imageSize}
                  colorVariation={colorVariation}
                  stackable={stackable}
                ></SingleItem>
              ))}
            </Item.Group>
          </Grid.Column>
          <Grid.Column mobile={12} tablet={6} computer={6}>
            <Item.Group unstackable className="row">
              {ColumnRight.map((item) => (
                <SingleItem
                  key={item.childKey}
                  {...item}
                  verticalAlign={verticalAlign}
                  mediaType={mediaType}
                  imageSize={imageSize}
                  colorVariation={colorVariation}
                  stackable={stackable}
                  textAlign={textAlign}
                ></SingleItem>
              ))}
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

const Template = (args) => <ItemGroup {...args}></ItemGroup>;

// Group of items
export const DefaultGroup = Template.bind({});
DefaultGroup.args = {
  mediaType: 'image',
  imageSize: 'medium',
  colorVariation: 'secondary',
  verticalAlign: 'middle',
  stackable: false,
  textAlign: 'left',
  ColumnLeft: [
    {
      childKey: 0,
      imageUrl: GlobeEco,
      icon: 'ri-earth-line',
      description:
        'Support Europe’s transition to a sustainable future with evidence-based knowledge and data.',
    },
    {
      childKey: 1,
      imageUrl: Sustainable,
      icon: 'ri-leaf-line',
      description:
        'Supply input on solutions to the sustainability challenges of today – and tomorrow.  ',
    },
    {
      childKey: 2,
      imageUrl: DataAnalytics,
      icon: 'ri-pie-chart-line',
      description:
        'Leverage the data and technology to support the EU’s decision-making processes concerning the environment and climate',
    },
  ],
  ColumnRight: [
    {
      childKey: 0,
      imageUrl: Network,
      icon: 'ri-pin-distance-line',
      description:
        'Build stronger networks and partnerships with state and regional governments and organisations.',
    },
    {
      childKey: 1,
      imageUrl: Knowledge,
      icon: 'ri-line-chart-line',
      description:
        'Strengthen the EU’s knowledge capacity and help secure the resources needed to create a sustainable Europe.',
    },
  ],
};

function ItemFlexGroup({
  mediaType,
  imageSize,
  colorVariation,
  verticalAlign,
  Items,
  stackable,
  textAlign,
}) {
  return (
    <Container>
      <Item.Group unstackable className="row flex-items-wrapper">
        {Items.map((item) => (
          <SingleItem
            key={item.childKey}
            {...item}
            verticalAlign={verticalAlign}
            mediaType={mediaType}
            imageSize={imageSize}
            colorVariation={colorVariation}
            stackable={stackable}
            textAlign={textAlign}
          ></SingleItem>
        ))}
      </Item.Group>
    </Container>
  );
}

const FlexTemplate = (args) => <ItemFlexGroup {...args}></ItemFlexGroup>;

// Flex items
export const FlexGroup = FlexTemplate.bind({});
FlexGroup.args = {
  mediaType: 'image',
  imageSize: 'medium',
  colorVariation: 'secondary',
  verticalAlign: 'middle',
  stackable: false,
  textAlign: 'left',
  Items: [
    {
      childKey: 0,
      imageUrl: GlobeEco,
      icon: 'ri-earth-line',
      description:
        'Support Europe’s transition to a sustainable future with evidence-based knowledge and data.',
    },
    {
      childKey: 1,
      imageUrl: Sustainable,
      icon: 'ri-leaf-line',
      description:
        'Supply input on solutions to the sustainability challenges of today – and tomorrow.  ',
    },
    {
      childKey: 2,
      imageUrl: DataAnalytics,
      icon: 'ri-pie-chart-line',
      description:
        'This is an exmple of an item having bigger description text. Leverage the data and technology to support the EU’s decision-making processes concerning the environment and climate',
    },
    {
      childKey: 3,
      imageUrl: Network,
      icon: 'ri-pin-distance-line',
      description:
        'Build stronger networks and partnerships with state and regional governments and organisations.',
    },
    {
      childKey: 4,
      imageUrl: GlobeEco,
      icon: 'ri-earth-line',
      description:
        'Support Europe’s transition to a sustainable future with evidence-based knowledge and data.',
    },
    {
      childKey: 5,
      imageUrl: Knowledge,
      icon: 'ri-line-chart-line',
      description:
        'Strengthen the EU’s knowledge capacity and help secure the resources needed to create a sustainable Europe.',
    },
  ],
};
