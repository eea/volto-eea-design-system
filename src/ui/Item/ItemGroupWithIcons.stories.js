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
      description: 'Image above content',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    mediaType: {
      name: 'Media type',
      options: ['image', 'icon'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'image' },
      },
    },
  },
};

function SingleItem({
  mediaType,
  imageUrl,
  icon,
  imageSize,
  description,
  verticalAlign,
  stackable,
}) {
  return (
    <Item className={stackable ? 'stackable' : ''}>
      {mediaType === 'image' ? (
        <Item.Image
          className={`ui ${imageSize}`}
          src={imageUrl}
          alt="item image"
        />
      ) : (
        <Icon className={`${imageSize} ${icon}`} />
      )}
      <Item.Content verticalAlign={verticalAlign}>
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
  imageSize: 'tile',
  verticalAlign: 'middle',
  stackable: false,
  description:
    'Support Europe’s transition to a sustainable future with evidence-based knowledge and data.',
};
DefaultItem.argTypes = {
  imageUrl: {
    name: 'Image URL',
    control: 'text',
    if: { arg: 'mediaType', eq: 'image' },
  },
  icon: {
    name: 'Icon class',
    control: 'text',
    if: { arg: 'mediaType', eq: 'icon' },
  },
  imageSize: {
    control: { type: 'select' },
    options: ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge'],
    description: 'Content can specify its vertical alignment',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
    },
  },
  verticalAlign: {
    control: { type: 'select' },
    options: ['top', 'middle', 'bottom'],
    description: 'An image can vary in size',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
    },
  },
  description: {
    description: 'Item content description',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
    },
  },
};

function ItemGroup({
  mediaType,
  imageUrl,
  icon,
  imageSize,
  verticalAlign,
  ColumnLeft,
  ColumnRight,
  stackable,
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
                  mediaType={mediaType}
                  imageSize={imageSize}
                  verticalAlign={verticalAlign}
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
                  mediaType={mediaType}
                  imageSize={imageSize}
                  verticalAlign={verticalAlign}
                  stackable={stackable}
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
  imageSize: 'tile',
  verticalAlign: 'middle',
  stackable: false,
  ColumnLeft: [
    {
      childKey: 0,
      imageUrl: GlobeEco,
      icon: 'ri-leaf-line',
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
      icon: 'ri-leaf-line',
      description:
        'Leverage the data and technology to support the EU’s decision-making processes concerning the environment and climate',
    },
  ],
  ColumnRight: [
    {
      childKey: 0,
      imageUrl: Network,
      icon: 'ri-home-2-line',
      description:
        'Build stronger networks and partnerships with state and regional governments and organisations.',
    },
    {
      childKey: 1,
      imageUrl: Knowledge,
      icon: 'ri-leaf-line',
      description:
        'Strengthen the EU’s knowledge capacity and help secure the resources needed to create a sustainable Europe.',
    },
  ],
};
DefaultGroup.argTypes = {
  imageSize: {
    control: { type: 'select' },
    options: ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge'],
    description: 'Content can specify its vertical alignment',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
    },
  },
  verticalAlign: {
    control: { type: 'select' },
    options: ['top', 'middle', 'bottom'],
    description: 'An image can vary in size',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: ' "" ' },
    },
  },
};
