import React from 'react';
import { Comment, Header } from 'semantic-ui-react';

export default {
  title: 'Components/Comment',
  component: CommentEEA,
  argTypes: {
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
            <Comment.Author as="a" href={comment.authorLink}>
              {comment.author}
            </Comment.Author>
            <Comment.Metadata>
              <div>{comment.time}</div>
            </Comment.Metadata>
            <Comment.Text>{comment.text}</Comment.Text>
            <Comment.Actions>
              <Comment.Action as="button" className="ui button text">
                Reply
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          {comment.replies.length > 0 && (
            <Comment.Group>
              {comment.replies.map((reply, repIndex) => (
                <Comment key={repIndex}>
                  <Comment.Avatar src={comment.src} alt="user avatar" />
                  <Comment.Content>
                    <Comment.Author as="a" href={reply.authorLink}>
                      {reply.author}
                    </Comment.Author>
                    <Comment.Metadata>
                      <div>{reply.time}</div>
                    </Comment.Metadata>
                    <Comment.Text>{reply.text}</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action as="button" className="ui button text">
                        Reply
                      </Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
              ))}
            </Comment.Group>
          )}
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
  comments: [
    {
      src: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
      author: 'User 1',
      authorLink: '/#',
      time: 'Message timestamp',
      text: 'Message Content',
      replies: [
        {
          src: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
          author: 'User 4',
          authorLink: '/#',
          time: 'Message timestamp',
          text: 'Message Content',
        },
      ],
    },
    {
      src: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
      author: 'User 2',
      authorLink: '/#',
      time: 'Message timestamp',
      text: 'Message Content',
      replies: [],
    },
    {
      src: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
      author: 'User 3',
      authorLink: '/#',
      time: 'Message timestamp',
      text: 'Message Content',
      replies: [],
    },
  ],
};
