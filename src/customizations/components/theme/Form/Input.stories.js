import React from 'react';
import { Input, Form } from 'semantic-ui-react';

export default {
  title: 'Components/Forms/Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['mini', 'small', 'large', 'big', 'huge'],
      },
      description:"input size",
      table:{
        type:{summary:'string'},
        defaultValue:{summary:'large'}
      }
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'date', 'email', 'number', 'password', 'file'],
      },
      description:"input type",
      table:{
        type:{summary:'string'},
        defaultValue:{summary:'text'}
      }
    },
    onChange: {
      action: 'input changed',
    },
    onFocus: {
      action: 'input focus',
    },
    placeholder:{
      description:"placeholder text",
      table:{
        type:{summary:'string'},
        defaultValue:{summary:' \""\ '}
      }
    },
  },
};

const Template = (args) => (
  <Form>
    <Form.Field>
      <label>Input label</label>
      <Input {...args} />
    </Form.Field>
  </Form>
);

export const StandardInput = Template.bind({});
StandardInput.args = {
  placeholder: 'Placeholder',
  type: 'text',
  size: 'large',
  fluid: false,
};

StandardInput.argTypes = {
  fluid:{
    description:"take on the size of its container",
    table:{
      type:{summary:'boolean'},
      defaultValue:{summary:false}
    }
  },
}

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  placeholder: 'Placeholder',
  type: 'text',
  disabled: true,
  size: 'large',
  fluid: false,
};

DisabledInput.argTypes = {
  fluid:{
    description:"take on the size of its container",
    table:{
      type:{summary:'boolean'},
      defaultValue:{summary:false}
    }
  },
}

DisabledInput.argTypes = {
  disabled:{
    description:"disabled",
    table:{
      type:{summary:'boolean'},
      defaultValue:{summary:true}
    }
  },
}

export const LoadingInput = Template.bind({});
LoadingInput.args = {
  placeholder: 'Placeholder',
  type: 'text',
  loading: true,
  size: 'large',
};

LoadingInput.argTypes = {
  loading:{
    description:"show that it is currently loading data",
    table:{
      type:{summary:'boolean'},
      defaultValue:{summary:true}
    }
  },
}

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  placeholder: 'Placeholder',
  type: 'text',
  error: true,
  size: 'large',
};

ErrorInput.argTypes = {
  error:{
    description:"show the data contains errors",
    table:{
      type:{summary:'boolean'},
      defaultValue:{summary:true}
    }
  },
}

