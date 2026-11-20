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
      <List as="ol" ordered animated={animated} divided={divided}>
        {items.map((item, index) => (
          <List.Item as="li" key={index}>
            <a href="/#">{item.content}</a>
            {item.subList && (
              <List.List role="list" as="ol" className="list">
                {item.subList.map((sub, subIndex) => (
                  <List.Item key={subIndex} as="li" role="listitem">
                    <a href="/#">{sub.content}</a>
                    {sub.subList && (
                      <List.List role="list" as="ol" className="list">
                        {sub.subList.map((sub1, subIndex) => (
                          <List.Item key={subIndex} as="li" role="listitem">
                            <a href="/#">{sub1.content}</a>
                            {sub1.subList && (
                              <List.List role="list" as="ol" className="list">
                                {sub1.subList.map((sub2, subIndex) => (
                                  <List.Item
                                    key={subIndex}
                                    as="li"
                                    role="listitem"
                                  >
                                    <a href="/#">{sub2.content}</a>
                                  </List.Item>
                                ))}
                              </List.List>
                            )}
                          </List.Item>
                        ))}
                      </List.List>
                    )}
                  </List.Item>
                ))}
              </List.List>
            )}
          </List.Item>
        ))}
      </List>
    </Container>
  );
}

export const Default = (args) => {
  return OrderedList(args.items, args.animated, args.divided);
};

Default.args = {
  items: [
    {
      header: 'header 1',
      content: 'Content 1',
      subList: [
        {
          header: 'Sub header 1',
          content: 'Content second level',
          subList: [
            { header: 'Sub header 1', content: 'Content third level' },
            { header: 'Sub header ', content: 'Content third level' },
          ],
        },
        { header: 'Sub header ', content: 'Content second level' },
      ],
    },
    {
      header: 'header 2',
      content: 'Content 2',
      subList: [
        {
          header: 'Sub header 1',
          content: 'Content second level',
          subList: [
            {
              header: 'Sub header 1',
              content: 'Content third level',
              subList: [
                { header: 'Sub header 1', content: 'Content fourth level' },
                { header: 'Sub header ', content: 'Content fourth level' },
              ],
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
};
