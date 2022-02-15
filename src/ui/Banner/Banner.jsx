import React from 'react';
import { Container, Icon, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

Banner.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  image: PropTypes.bool,
};

function Banner({ title, info, image }) {
  return (
    <div className="eea-page-banner">
      <div className={image ? 'image' : null}></div>
        <div className="gradient">
          <Container>
            <div className="content">
              <Grid>
                <Grid.Column mobile={10} tablet={9} computer={9}>
                  <p className="title">{title}</p>
                  <p className="metadata">{info}</p>
                </Grid.Column>
                <Grid.Column mobile={2} tablet={3} computer={3}>
                  <div className="actions mobile hidden">
                    <div className="bookmark">
                      <Icon name="bookmark outline"></Icon>
                      Bookmark
                    </div>
                    <div className="download">
                      <Icon name="download"></Icon>
                      Download
                    </div>
                  </div>

                  <div className="actions mobile only">
                    <div className="bookmark">
                      <Icon name="bookmark outline"></Icon>
                    </div>
                    <div className="download">
                      <Icon name="download"></Icon>
                    </div>
                  </div>
                </Grid.Column>
              </Grid>
            </div>
          </Container>
        </div>
    </div>
  );
}

export default Banner;
