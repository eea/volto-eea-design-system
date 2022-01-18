import React from 'react';
import { Comment, Header } from 'semantic-ui-react';
import CommentStories from './Comment.stories';
//  "../../../../../../../../.storybook/assets/eea_icon.png"
function CommentEEA({ title, comments, threaded, minimal, size }) {
  return (
    <Comment.Group threaded={threaded} minimal={minimal} size={size}>
      <Header dividing>{title}</Header>

      {comments.map((comment, comIndex) => (
        <Comment key={comIndex}>
          <Comment.Avatar src={comment.src}/>
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
                <Comment.Avatar src={comment.src} />
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

export default CommentEEA;
