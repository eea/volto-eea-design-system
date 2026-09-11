import React from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['mini', 'tiny', 'small', 'large', 'fullscreen'],
      description: 'modal size',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'large',
        },
      },
    },
    dimmer: {
      control: { type: 'select' },
      options: [true, 'inverted', 'blurring'],
      description: 'modal background dimmer',
      table: {
        type: {
          summary: 'bool|func|object|enum',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    content: {
      description: 'modal background dimmer',
      table: {
        type: {
          summary: 'custom',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
    header: {
      description: 'modal heading',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
    trigger: {
      description:
        'Element to be rendered in-place where the portal is defined',
      table: {
        type: {
          summary: 'node',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
  },
};

function ModalEEA({
  trigger,
  header,
  content,
  centered = false,
  size,
  dimmer = true,
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
      centered={centered}
      size={size}
      dimmer={dimmer}
    >
      <Button
        className="close icon"
        onClick={() => setOpen(false)}
        title="Close modal dialog"
      >
        <Icon name="close" />
      </Button>

      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>
        <Modal.Description>{content}</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>No</Button>
        <Button onClick={() => setOpen(false)} primary>
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

const trigger = <Button primary>Show Modal</Button>;

const Template = (args) => <ModalEEA {...args}></ModalEEA>;

export const Default = Template.bind({});
Default.args = {
  header: 'Modal Header',
  content: 'Modal Content',
  centered: true,
  size: 'mini',
  dimmer: true,
  trigger: trigger,
};

Default.argTypes = {
  centered: {
    description: 'vertically centered in the viewport',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: true,
      },
    },
  },
};
