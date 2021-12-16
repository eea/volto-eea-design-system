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
        {key: "item 1", active:true, name:"ITEM 1"},
        {key: "item 2", name:"ITEM 2"},
        {key: "item 3", name:"ITEM 3"},
        {key: "item 4", name:"ITEM 4"},
    ],
};

export const Playground = Template.bind({});
Playground.args = {
    items: [
        {key: "item 1", active:true, name:"ITEM 1"},
        {key: "item 2", name:"ITEM 2"},
        {key: "item 3", name:"ITEM 3"},
        {key: "item 4", name:"ITEM 4"},
    ],
    secondary:false,
    pointing:false,
    tabular: false,
    text:false,
    vertical:false
    
};




