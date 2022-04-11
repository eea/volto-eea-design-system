import React from 'react';
import { List, Container } from 'semantic-ui-react';

export default {
  title: 'Components/List/Ordered List',
  component: List,
  argTypes: {
    animated: {
      description:
        'a list can animate to set the current item apart from the list',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    divided: {
      description: 'a list can show divisions between conten',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    horizontal: {
      description: 'a list can be formatted to have items appear horizontally',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    items: {
      description: 'array of list content',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: ' "" ' },
      },
    },
  },
};

function OrderedList(items, animated, divided, horizontal) {
  return (
    <Container>
      <List as="ul" ordered animated={animated} divided={divided} horizontal={horizontal}>
        {items.map((item, index) => (
          <List.Item as="a" key={index}>
            {item.content}
            {item.subList &&
              <List.List role="list">
                {item.subList.map((sub, subIndex) => (
                  <List.Item key={subIndex} as="a" role="listitem">
                    {sub.content}
                    {sub.subList &&
                      <List.List role="list">
                        {sub.subList.map((sub1, subIndex) => (
                          <List.Item key={subIndex} as="a" role="listitem">
                            {sub1.content}
                            {sub1.subList &&
                              <List.List role="list">
                                {sub1.subList.map((sub2, subIndex) => (
                                  <List.Item key={subIndex} as="a" role="listitem">
                                    {sub2.content}
                                  </List.Item>
                                ))}
                              </List.List>}
                          </List.Item>
                        ))}
                      </List.List>}
                  </List.Item>
                ))}
              </List.List>}
          </List.Item>
        ))}
      </List>
    </Container>
  );
}

export const Default = (args) => {
  return OrderedList(
    args.items,
    args.animated,
    args.divided,
    args.horizontal,
  );
};

Default.args = {
  items: [
    {
      header: 'header 1',
      content: 'Content 1',
      subList: [
        { 
          header: 'Sub header 1', content: 'Content second level', subList: [
            { header: 'Sub header 1', content: 'Content third level' },
            { header: 'Sub header ', content: 'Content third level' },
          ]
        },
        { header: 'Sub header ', content: 'Content second level' },
      ],
    },
    {
      header: 'header 2',
      content: 'Content 2',
      subList: [
        {
          header: 'Sub header 1', content: 'Content second level', subList: [
            {
              header: 'Sub header 1', content: 'Content third level', subList: [
                { header: 'Sub header 1', content: 'Content fourth level' },
                { header: 'Sub header ', content: 'Content fourth level' },
              ]
            },
            { header: 'Sub header ', content: 'Content third level' },
          ],
        },
        { header: 'Sub header ', content: 'Content second level' },
      ],
    },
    {
      header: 'header 3',
      content: 'Content 3',
      subList: [
        { header: 'Sub header 1', content: 'Content second level' },
        { header: 'Sub header ', content: 'Content second level' },
      ],
    },
    {
      header: 'header 4',
      content: 'Content 4',
      subList: [
        { header: 'Sub header 1', content: 'Content second level' },
        { header: 'Sub header ', content: 'Content second level' },
      ],
    },
  ],
  animated: false,
  divided: false,
  horizontal: false,
};
