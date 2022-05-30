import React from 'react';
import { Item, Container, Grid } from 'semantic-ui-react';

import GlobeEco from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Svg/globe-eco.svg';
import Sustainable from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Svg/sustainable.svg';
import DataAnalytics from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Svg/data-analytics.svg';
import Network from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Svg/network.svg';
import Knowledge from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Svg/knowledge.svg';

export default {
  title: 'Components/Item/Item group with icons',
  component: Item,
  argTypes: {},
};

function SingleItem({ image, imageSize, description, verticalAlign }) {
  return (
    <Item>
      {/* <Item.Image size={imageSize == 'default' ? '' : imageSize} src={image} alt="item image" /> */}
      <Item.Image className={`ui ${imageSize}`} src={image} alt="item image" />
      <Item.Content verticalAlign={verticalAlign}>{description}</Item.Content>
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
  imageSize: 'default',
  verticalAlign: 'middle',
  image: GlobeEco,
  description:
    'Support Europe’s transition to a sustainable future with evidence-based knowledge and data.',
};
DefaultItem.argTypes = {
  imageSize: {
    control: { type: 'select' },
    options: ['mini', 'tile', 'tiny', 'small'],
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
  image: {
    description: 'Path or Url of the image',
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

function ItemGroup({ imageSize, verticalAlign, ColumnLeft, ColumnRight }) {
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
                  imageSize={imageSize}
                  verticalAlign={verticalAlign}
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
                  imageSize={imageSize}
                  verticalAlign={verticalAlign}
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
  imageSize: 'mini',
  verticalAlign: 'middle',
  ColumnLeft: [
    {
      childKey: 0,
      image: GlobeEco,
      description:
        'Support Europe’s transition to a sustainable future with evidence-based knowledge and data.',
    },
    {
      childKey: 1,
      image: Sustainable,
      description:
        'Supply input on solutions to the sustainability challenges of today – and tomorrow.  ',
    },
    {
      childKey: 2,
      image: DataAnalytics,
      description:
        'Leverage the data and technology to support the EU’s decision-making processes concerning the environment and climate',
    },
  ],
  ColumnRight: [
    {
      childKey: 0,
      image: Network,
      description:
        'Build stronger networks and partnerships with state and regional governments and organisations.',
    },
    {
      childKey: 1,
      image: Knowledge,
      description:
        'Strengthen the EU’s knowledge capacity and help secure the resources needed to create a sustainable Europe.',
    },
  ],
};
DefaultGroup.argTypes = {
  imageSize: {
    control: { type: 'select' },
    options: ['mini', 'tile', 'tiny', 'small'],
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
