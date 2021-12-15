import React, { Component,useState } from 'react'
import { Menu } from 'semantic-ui-react'

export default {
    title: 'Components/Menu',
    component: Menu,
    parameters: {
        actions: {
          handles: ['click'],
        },
      },
    argTypes:{
        
    }
}

function MenuContent({items,secondary,pointing,tabular,text,vertical}) {

    const [activeItem,setActiveItem] = useState(items.find(item => item.active === true ).key);

    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    }

    return(
        <Menu secondary={secondary} pointing={pointing} tabular={tabular} text={text} vertical={vertical}>
            {items.map((item) => (
                <Menu.Item name={item.key} active={activeItem == item.key} onClick={handleItemClick}>{item.name}</Menu.Item>
            ))}
            
        </Menu>
        
    );
}

const Template = (args) => <MenuContent {...args}></MenuContent>;

export const Default = Template.bind({});
Default.args = {
    items: [
        {key: "home", active:true, name:"HOME"},
        {key: "news", name:"NEWS"},
        {key: "events", name:"EVENTS"},
        {key: "users", name:"USERS"},
    ],
};

export const Playground = Template.bind({});
Playground.args = {
    items: [
        {key: "home", active:true, name:"HOME"},
        {key: "news", name:"NEWS"},
        {key: "events", name:"EVENTS"},
        {key: "users", name:"USERS"},
    ],
    secondary:false,
    pointing:false,
    tabular: false,
    text:false,
    vertical:false
    
};




