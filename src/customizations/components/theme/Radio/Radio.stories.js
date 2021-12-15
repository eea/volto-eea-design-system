import React from 'react'
import { Radio } from 'semantic-ui-react'

export default {
    title: 'Components/Radio',
    component: Radio,
    parameters: {
        actions: {
          handles: ['click'],
        },
      },
    argtypes: {}
}

const Template = (args) => <Radio {...args}></Radio>

export const Default = Template.bind({});
Default.args = {
    label:"Radio Label",
}

export const Playground = Template.bind({});
Playground.args = {
    label:"Radio Label",
    toggle: false,
    slider:false,
    disabled:false,
    readOnly:false,
}