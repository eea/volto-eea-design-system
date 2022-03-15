import React from 'react';
import { Grid } from 'semantic-ui-react';

function ContentBox({ children, ...rest }) {
  return (
    <div className="eea contentbox">
      <Grid>
        <Grid.Column mobile={1} tablet={1} computer={2}></Grid.Column>
        <Grid.Column mobile={10} tablet={10} computer={8}>
          <div className="title wrapper">{rest.title}</div>
          <div className="body wrapper">{rest.info}</div>
        </Grid.Column>
        <Grid.Column mobile={1} tablet={1} computer={2}></Grid.Column>
      </Grid>
    </div>
  );
}

ContentBox.Content = ({ children }) => {
  return <div className="content">{children}</div>;
};

ContentBox.Title = ({ children }) => {
  return <div className="title">{children}</div>;
};

export default ContentBox;
