import React from 'react'
import { Header,Icon } from 'semantic-ui-react'

export default {
    title: 'Components/Header',
    component: Header,
    argTypes:{
        size:{
            control:{type:'inline-radio'},
            options:['huge','large','medium','small','tiny']
        },
        textAlign:{
            control:{type:'inline-radio'},
            options:['left','center','right','justified']
        },
        floated:{
            control:{type:'inline-radio'},
            options:[false,'left','right']
        }
    }
}

function HeaderContent({content,size,icon,textAlign}){
    return(
        <Header size={size} icon={icon} textAlign={textAlign}>
            {icon && <Icon name='users' circular />}
            <Header.Content>
                {content}
            </Header.Content>
        </Header>
    );
}

const Template = (args) => <Header {...args} ></Header>;

export const Default = Template.bind({});
Default.args = {
    children:"Default Header",
}

export const Playground = Template.bind({});
Playground.args = {
    content:"Playground Header",
    subheader:'Subheader',
    size: "medium",
    textAlign:"left",
    dividing: false,
    color: "black",
    floated:"left",
    disabled: false,
    sub:false,
    block:false,
    attached:false   
}



