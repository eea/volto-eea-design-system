import { injectIntl } from 'react-intl';
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
};

const Template = (args) => (
  <Card {...args}>
    {args.hasImage && (
      <Image
        src="https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large"
        wrapped
        ui={false}
      />
    )}
    <Card.Content>
      <Card.Header>{args.title}</Card.Header>
      <Card.Meta>{args.meta}</Card.Meta>
      <Card.Description>{args.description}</Card.Description>
    </Card.Content>
    {args.links !== null &&
      args.links.map((item) => (
        <Card.Content extra>
          <a href="/#">{item.linkName}</a>
        </Card.Content>
      ))}
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  //src: 'https://www.eea.europa.eu/media/pictures/european-environment-agency-building-with/image_large',
  hasImage: false,
  title: 'Card Header',
  meta: 'meta data',
  description: 'card description',
  fluid: false,
  links: [{ linkName: 'Link 1' }],
};
