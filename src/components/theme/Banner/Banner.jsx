import React from 'react';
import { Container, Icon, Grid } from 'semantic-ui-react';
import { Col } from '../../../customizations/components/theme/Grid/Col';
import PropTypes from 'prop-types';

Banner.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  image: PropTypes.bool,
};

function Banner({ title, info, image }) {
  return (
    <div className="eea-page-banner">
      <div className={image ? 'eea-page-banner-image' : null}>
        <div className="eea-banner-gradient">
          <Container>
            <div className="eea-page-banner-text">
              <Grid.Row className="eea-page-banner-text-row">
                <Col desktop="9" tablet="6" mobile="4">
                  <div className="eea-page-banner-title">
                    <p className="eea-page-banner-header">{title}</p>
                    <p className="eea-page-banner-meta">{info}</p>
                  </div>
                </Col>
                <Col desktop="3" tablet="2" mobile="4">
                  <div className="eea-page-banner-actions">
                    <div className="eea-page-banner-actions-bookmark">
                      <Icon name="bookmark outline"></Icon>
                      Bookmark
                    </div>
                    <div className="eea-page-banner-actions-download">
                      <Icon name="download"></Icon>
                      Download
                    </div>
                  </div>

                  <div className="eea-page-banner-actions-mobile">
                    <div className="eea-page-banner-actions-bookmark">
                      <Icon name="bookmark outline"></Icon>
                    </div>
                    <div className="eea-page-banner-actions-download">
                      <Icon name="download"></Icon>
                    </div>
                  </div>
                </Col>
              </Grid.Row>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Banner;
