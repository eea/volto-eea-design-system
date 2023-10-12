import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import PropTypes from 'prop-types';

const Sites = (props) => {
  const getLogoColumns = (logos) => {
    let column = [];
    for (let i = 0; i < logos.length; i += 2) {
      const item = logos[i];
      const nextItem = logos[i + 1];
      column.push(
        <Grid.Column className="logo" key={i}>
          <a className="logo" href={item.url} aria-label={item.alt}>
            <LazyLoadComponent>
              <Image
                className={item.className}
                src={item.src}
                alt={item.alt}
              ></Image>
            </LazyLoadComponent>
          </a>
          <a className="logo" href={nextItem.url} aria-label={item.alt}>
            <LazyLoadComponent>
              <Image
                className={nextItem.className}
                src={nextItem.src}
                alt={nextItem.alt}
              ></Image>
            </LazyLoadComponent>
          </a>
        </Grid.Column>,
      );
    }
    return column;
  };

  if (props.children) {
    return <div>{props.children}</div>;
  }

  //fallback to props
  return (
    <div className="theme-sites">
      <div className="logos">
        <Grid columns={5} stackable>
          {getLogoColumns(props.sites)}
        </Grid>
      </div>
    </div>
  );
};

Sites.propTypes = {
  sites: PropTypes.array,
};

export default Sites;
