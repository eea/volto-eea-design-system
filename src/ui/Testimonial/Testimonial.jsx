import React from 'react';
import PropTypes from 'prop-types';
import Divider from '../Divider/Divider';

import Pullquote from '../Pullquote/Pullquote';
import { Grid, Card, Image } from 'semantic-ui-react';

Testimonial.propTypes = {
  title: PropTypes.string,
};

function Testimonial({ children, ...rest }) {
  return (
    <div className="eea testimonial" {...rest}>
      <Divider />
      <Grid>{children}</Grid>
      <Divider />
    </div>
  );
}

Testimonial.Avatar = ({ children, ...rest }) => {
  return (
    <Grid.Column mobile={12} tablet={3} computer={2}>
      <div className="avatar-wrapper">
        <Card className={`eea rounded small`} fluid={rest.fluid}>
          <Image src={rest.src} wrapped ui={false} alt="card image" />
          <Card.Content>
            <Card.Header>{rest.title}</Card.Header>
            <Card.Description>{rest.description}</Card.Description>
          </Card.Content>
        </Card>
      </div>
    </Grid.Column>
  );
};

Testimonial.Content = ({ children }) => {
  return (
    <Grid.Column mobile={12} tablet={9} computer={10}>
      <div className="content">{children}</div>
    </Grid.Column>
  );
};

Testimonial.Title = ({ children }) => <h3 className="title">{children}</h3>;
Testimonial.Pullquote = ({ children, ...rest }) => (
  <Pullquote quotePosition="none">
    <Pullquote.Quote>{children}</Pullquote.Quote>
  </Pullquote>
);

export default Testimonial;
