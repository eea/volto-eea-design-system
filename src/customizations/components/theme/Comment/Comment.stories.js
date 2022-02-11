import React from 'react';
import { Comment, Header } from 'semantic-ui-react';
import eeaIcon from '../../theme/../../../../theme/themes/eea/assets/images/eea_icon.png';

export default {
  title: 'Components/Comment',
  component: CommentEEA,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['mini', 'tine', 'small', 'large', 'big', 'huge', 'massive'],
      description: 'comment section size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'large' },
      },
    },
    title: {
      description: 'comment section header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' "" ' },
      },
    },
    comments: {
      description: 'comments data',
      table: {
        type: { summary: 'Object' },
        defaultValue: { summary: ' "" ' },
      },
    },
    threaded: {
      description: 'showing the relationship between comments',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    minimal: {
      description: 'hide extra information',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

function CommentEEA({ title, comments, threaded, minimal, size }) {
  return (
    <Comment.Group threaded={threaded} minimal={minimal} size={size}>
      <Header dividing>{title}</Header>

      {comments.map((comment, comIndex) => (
        <Comment key={comIndex}>
          <Comment.Avatar src={comment.src} alt="user avatar" />
          <Comment.Content>
            <Comment.Author as="a">{comment.author}</Comment.Author>
            <Comment.Metadata>
              <div>{comment.time}</div>
            </Comment.Metadata>
            <Comment.Text>{comment.text}</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group>
            {comment.replies.map((reply, repIndex) => (
              <Comment key={repIndex}>
                <Comment.Avatar src={comment.src} alt="user avatar" />
                <Comment.Content>
                  <Comment.Author as="a">{reply.author}</Comment.Author>
                  <Comment.Metadata>
                    <div>{reply.time}</div>
                  </Comment.Metadata>
                  <Comment.Text>{reply.text}</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            ))}
          </Comment.Group>
        </Comment>
      ))}
    </Comment.Group>
  );
}

const Template = (args) => <CommentEEA {...args}></CommentEEA>;

export const Default = Template.bind({});
Default.args = {
  title: 'Comments Header',
  threaded: false,
  minimal: false,
  size: 'large',
  comments: [
    {
      src: eeaIcon,
      author: 'User 1',
      time: 'Message timestamp',
      text: 'Message Content',
      replies: [
        {
          src: eeaIcon,
          author: 'User 4',
          time: 'Message timestamp',
          text: 'Message Content',
        },
      ],
    },
    {
      src: eeaIcon,
      author: 'User 2',
      time: 'Message timestamp',
      text: 'Message Content',
      replies: [],
    },
    {
      src: eeaIcon,
      author: 'User 3',
      time: 'Message timestamp',
      text: 'Message Content',
      replies: [],
    },
  ],
};
