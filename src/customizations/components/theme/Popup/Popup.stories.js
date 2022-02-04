import { React } from 'react';
import { Button, Segment, Popup, Image, Icon } from 'semantic-ui-react';
import EUflag from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/europe-flag.svg';

export default {
  title: 'Components/Popup',
  component: Popup,
  argTypes: {
    content: {
      description: 'popup text',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
    position: {
      options: [
        'top left',
        'top center',
        'top right',
        'left center',
        'right center',
        'bottom left',
        'bottom center',
        'bottom right',
      ],
      control: { type: 'select' },
      description: 'Popup position around its trigger.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'top center',
        },
      },
    },
    size: {
      options: ['mini', 'tiny', 'small', 'large', 'huge'],
      control: { type: 'select' },
      description: 'Popup size.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'small',
        },
      },
    },
  },
};

export const ButtonPopup = (args) => (
  <Segment placeholder>
    <Popup
      {...args}
      trigger={
        <Button icon labelPosition="right" className="action">
          Info Popup
          <Icon name="info" />
        </Button>
      }
    />
  </Segment>
);
ButtonPopup.args = {
  content: 'Popup text for button',
  position: 'top center',
  size: 'small',
};

export const ImagePopup = (args) => (
  <Segment placeholder>
    <Popup
      {...args}
      trigger={
        <Image
          src={EUflag}
          alt="EU Flag"
          title="EU Flag"
          height={64}
          className="eu-flag"
        />
      }
    />
  </Segment>
);
ImagePopup.args = {
  content: 'Popup text for image',
  position: 'top center',
  size: 'small',
};
