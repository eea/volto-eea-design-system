import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default {
    title: 'Components/Modal',
    component: Modal,
    argTypes:{
        size:{
            control:{type:'select'},
            options:['mini','tiny','small','large','fullscreen']
        },
        dimmer:{
            control:{type:'select'},
            options:[,true,'inverted','blurring']
        }
    }
}

const trigger = <Button>Show Modal</Button>;


const Template = (args) => <Modal {...args}></Modal>

export const Default = Template.bind({});
Default.args = {
    trigger:trigger,
    header:"Modal Header",
    content:"Modal Content",
    actions:['Snooze', { key: 'done', content: 'Done', positive: true }]
} 

export const Playground = Template.bind({});
Playground.args = {
    trigger:trigger,
    header:"Modal Header",
    content:"Modal Content",
    actions:['Snooze', { key: 'done', content: 'Done', positive: true }],
    centered:true,
    size:'large',
    dimmer:true
}