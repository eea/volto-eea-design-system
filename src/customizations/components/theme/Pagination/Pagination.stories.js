import React from 'react'
import { Pagination } from 'semantic-ui-react'

export default {
    title:'Components/Pagination',
    component: Pagination,
    parameters: {
        actions: {
          handles: ['click'],
        },
      },
    argTypes:{}
}

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
    defaultActivePage: 5,
    totalPages: 10,
}

export const Playground = Template.bind({});
Playground.args = {
    defaultActivePage: 5,
    totalPages: 10,
    disabled:false,
    pointing:false,
    secondary:false,
    boundaryRange:0,
    siblingRange:1,
}