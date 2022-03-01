import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Sites = (props) => {
  if (props.children) {
    return <div>{props.children}</div>;
  }

  //fallback to props
  return (
    <div className="theme-sites">
      <div className="logos">
        <Grid columns={5}>
          {props.sites &&
            props.sites.map((site, index) => (
              <Grid.Column className="logo" key={index}>
                <a href={site.link}>
                  <Image src={site.src} alt={site.alt}></Image>
                </a>
              </Grid.Column>
            ))}
        </Grid>
      </div>
    </div>
  );
};

Sites.propTypes = {
  sites: PropTypes.array,
};

export default Sites;
