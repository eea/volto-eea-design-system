import React, { useState } from 'react';
import { Button, Confirm } from 'semantic-ui-react';

export default {
  title: 'Components/Confirm',
  component: Confirm,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['mini', 'tiny', 'small', 'large'],
      description: 'confirmation modal size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'small' },
      },
    },
    confirmHeader: {
      description: 'modal header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    content: {
      description: 'modal message',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    cancelButton: {
      description: 'cancel button text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    confirmButton: {
      description: 'confirmation button text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
  },
};

function ConfirmContent({
  confirmHeader,
  cancelButton,
  confirmButton,
  content,
  size,
}) {
  const [open, setOpen] = useState(false);

  const openConfirm = () => {
    setOpen(true);
  };

  const closeConfirm = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button primary onClick={openConfirm}>
        Show Confirmation
      </Button>
      <Confirm
        className="eea-modal"
        open={open}
        header={confirmHeader}
        onCancel={closeConfirm}
        onConfirm={closeConfirm}
        cancelButton={cancelButton}
        confirmButton={confirmButton}
        content={content}
        size={size}
      />
    </div>
  );
}

const Template = (args) => <ConfirmContent {...args}></ConfirmContent>;

export const Default = Template.bind({});
Default.args = {
  size: 'small',
  confirmHeader: 'This is the confirm header',
  content: 'Are you sure?',
  cancelButton: 'Cancel',
  confirmButton: 'OK',
};
