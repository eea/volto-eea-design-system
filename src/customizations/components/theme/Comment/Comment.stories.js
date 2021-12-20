import React from 'react'
import CommentEEA from './Comment'
import { Icon } from 'semantic-ui-react'

export default {
    title: 'Components/Comment',
    component: CommentEEA,
    argTypes: {
        size:{
            control:{type:'select'},
            options:['mini','tine','small','large','big','huge','massive']
        }
    }
}

const Template = (args) => <CommentEEA {...args}></CommentEEA>

export const Default = Template.bind({});
Default.args = {
    title:"Comments Header",
    comments: [
        {src:"",author:"User 1",time:"Message timestamp",text:"Message Content",replies:[{src:"",author:"User 4",time:"Message timestamp",text:"Message Content"}]},
        {src:"",author:"User 2",time:"Message timestamp",text:"Message Content",replies:[]},
        {src:"",author:"User 2",time:"Message timestamp",text:"Message Content",replies:[]},
    ],
    threaded:false,
    minimal:false,
    size:'large'
}