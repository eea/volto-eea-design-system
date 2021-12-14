import { React } from 'react';
import { Button, Segment, Popup, Image } from 'semantic-ui-react';
import EUflag from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/europe-flag.svg';

export default {
  title: 'Components/Popup',
  component: Popup,
  argTypes: {
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
    },
    size: {
      options: ['mini', 'tiny', 'small', 'large', 'huge'],
      control: { type: 'select' },
    },
  },
};

export const ButtonPopup = (args) => (
  <Segment className="storybookComponents">
    <Popup {...args} trigger={<Button icon="info" label="Information" />} />
  </Segment>
);
ButtonPopup.args = {
  content: 'Popup text for button',
  position: 'top center',
  size: 'small',
};

export const ImagePopup = (args) => (
  <Segment className="storybookComponents">
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
