import React from 'react';
import PropTypes from 'prop-types';

import Quote from '../Quote';
import { Grid, Card, Image, Divider } from 'semantic-ui-react';

Testimonial.propTypes = {
  title: PropTypes.string,
};

function Testimonial({ children, ...rest }) {
  return (
    <div className="eea testimonial" {...rest}>
      <Divider fitted className="secondary" />
      <Grid>{children}</Grid>
      <Divider fitted className="secondary" />
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
Testimonial.Quote = ({ children, ...rest }) => (
  <Quote quotePosition="none">
    <Quote.Quote>{children}</Quote.Quote>
  </Quote>
);

export default Testimonial;
