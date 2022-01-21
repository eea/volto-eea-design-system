import React from 'react';
import { Container, Icon, Grid } from 'semantic-ui-react';
import { Col } from '../Grid/Col';
//import banner from '../../../../../theme/themes/eea/assets/images/banner.png';

function Banner({ title, info }) {
  return (
    <div className="eea-page-banner">
      <div className="eea-page-banner-image">
        <Container className="eea-page-banner-container">
          <div className="eea-page-banner-text">
            <Grid.Row className="eea-page-banner-text-row">
              <Col desktop="9" tablet="6" mobile="4">
                <div className="eea-page-banner-title">
                  <h1>{title}</h1>
                  <p className="eea-page-banner-meta">{info}</p>
                </div>
              </Col>
              <Col desktop="3" tablet="2" mobile="4">
                <div className="eea-page-banner-actions">
                  <div className="eea-page-banner-actions-bookmark">
                    <Icon name="bookmark outline" color="white"></Icon>
                    Bookmark
                  </div>
                  <div className="eea-page-banner-actions-download">
                    <Icon name="download" color="white"></Icon>
                    Download
                  </div>
                </div>
              </Col>
            </Grid.Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Banner;