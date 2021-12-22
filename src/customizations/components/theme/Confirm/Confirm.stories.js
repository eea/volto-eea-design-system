import React, { Component, useState } from 'react';
import { Button, Confirm } from 'semantic-ui-react';

export default {
  title: 'Components/Confirm',
  component: Confirm,
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['mini', 'tiny', 'small', 'large', 'fullscreen'],
    },
  },
};

function ConfirmContent({ cancelButton, confirmButton, content, size }) {
  const [open, setOpen] = useState(false);

  const openConfirm = () => {
    setOpen(true);
  };

  const closeConfirm = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={openConfirm}>Show</Button>
      <Confirm
        open={open}
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
  cancelButton: 'Cancel',
  confirmButton: 'OK',
  content: 'Are you sure?',
  size: 'small',
};
