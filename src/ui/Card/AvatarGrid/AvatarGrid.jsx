import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

function AvatarGrid({ children, ...rest }) {
  return (
    <div className="eea avatar-grid" {...rest}>
      <div className="wrapper">{children}</div>
    </div>
  );
}

AvatarGrid.Content = ({ children }) => {
  return <div className="content">{children}</div>;
};

AvatarGrid.Group = ({ children, ...rest }) => {
  let avatars = rest.avatars;

  return (
    <div className="avatar group">
      <Grid>
        {avatars.map((avatar, index) => (
          <Grid.Column key={index} mobile={12} tablet={4} computer={4}>
            <div className="avatar-wrapper">
              <Card
                className={`eea rounded ${
                  rest.variant === 'default' ? '' : rest.variant
                } ${rest.inverted ? 'inverted' : ''}`}
                fluid={avatar.fluid}
              >
                {rest.hasLink ? (
                  <Image
                    as="a"
                    href={rest.href}
                    src={avatar.src}
                    wrapped
                    ui={false}
                    alt="card image"
                  />
                ) : (
                  <Image src={avatar.src} wrapped ui={false} alt="card image" />
                )}
                <Card.Content>
                  {rest.hasLink ? (
                    <Card.Header>
                      <a href={rest.href}>{avatar.title}</a>
                    </Card.Header>
                  ) : (
                    <Card.Header>{avatar.title}</Card.Header>
                  )}
                  <Card.Description>{avatar.description}</Card.Description>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};
export default AvatarGrid;
