import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

export default {
    title: 'Components/Breadcrumb/Breadcrumb 2',
    component: Breadcrumb,
    parameters: {
        actions: {
          handles: ['click'],
        },
      },
    argTypes: {
        icon:{
            control:{type:'select'},
            options:['right chevron','right arrow','caret right']
        },
        size:{
            control:{type:'select'},
            options:['mini','tiny','small','large','big','huge','massive']
        }
    },
  };

  const Template = (args) => <Breadcrumb {...args}></Breadcrumb>

  export const Default = Template.bind({});
  Default.args = {
      sections:[
          {key:"Section 1", content:"Section 1",link:true},
          {key:"Section ", content:"Section 2",link:true},
          {key:"Section 3", content:"Section 3",link:true},
      ],
      icon:'right arrow',
      size:"small"
  }