import React from 'react';
import { Container, Icon, Button, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import { formatDate } from '@plone/volto/helpers/Utils/Date';
import cx from 'classnames';
import config from '@plone/volto/registry';

Banner.propTypes = {
  title: PropTypes.string,
};

const socialPlatforms = {
  facebook: {
    shareLink: (url) => `https://facebook.com/sharer.php?u=${url}`,
  },
  twitter: {
    shareLink: (url) => `https://www.twitter.com/share?url=${url}`,
  },
  linkedin: {
    shareLink: (url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  },
  reddit: {
    shareLink: (url, title) => `https://reddit.com/submit?url=${url}`,
  },
};

export const getImageSource = (image) => {
  if (image?.data && image?.encoding === 'base64') {
    return `data:${image.contentType};base64,${image.data}`;
  }
  if (image?.scales?.huge) return flattenToAppURL(image.scales.huge.download);
  if (image?.scales?.great) return flattenToAppURL(image.scales.great.download);
  if (image?.scales?.large) return flattenToAppURL(image.scales.large.download);
  return null;
};

export const sharePage = (url, platform) => {
  if (!socialPlatforms[platform]) return;
  const link = document.createElement('a');
  link.setAttribute('href', socialPlatforms[platform].shareLink(url));
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noreferrer');
  link.click();
};

function Banner({ image, metadata, properties, children, styles, ...rest }) {
  if (image) {
    //extract Lead image from page content.
    const content = metadata || properties;
    const imageUrl = getImageSource(content['image']) ?? image;
    return (
      <div className="eea banner">
        <div
          className={cx(imageUrl ? 'image' : '', styles?.bg)}
          style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
        >
          <div className="gradient">
            <Container>{children}</Container>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="eea banner">
      <div className="gradient">
        <Container>{children}</Container>
      </div>
    </div>
  );
}

Banner.Action = React.forwardRef(function (
  { title, titleClass, icon, onClick, className, color, ...rest },
  ref,
) {
  return (
    <div className="action" ref={ref}>
      <Button className={className} basic icon inverted onClick={onClick}>
        <Icon className={icon} color={color} title={title}></Icon>
        <span className={titleClass || 'mobile-sr-only'}>{title}</span>
      </Button>
    </div>
  );
});

Banner.Content = ({ children, actions }) => {
  return (
    <div className="content">
      <Grid>
        <Grid.Column mobile={10} tablet={9} computer={9}>
          {children}
        </Grid.Column>
        <Grid.Column mobile={2} tablet={3} computer={3} className="actions">
          {actions}
        </Grid.Column>
      </Grid>
    </div>
  );
};

Banner.Title = ({ children }) => {
  return <h1 className="documentFirstHeading title">{children}</h1>;
};
Banner.Subtitle = ({ children }) => <p className="subtitle">{children}</p>;
Banner.Metadata = ({ children }) => <p className="metadata">{children}</p>;

Banner.MetadataField = ({ hidden, type = 'text', label, value }) => {
  const locale = config.settings.dateLocale || 'en-gb';
  if (hidden || !value) return '';
  if (type === 'date' && value)
    return (
      <time className={`field ${type}`} dateTime={value}>
        {label}{' '}
        {formatDate({
          date: value,
          format: {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          },
          locale: locale,
        })}
      </time>
    );
  return (
    <span className={`field ${type}`}>
      {label && <>{label}: </>}
      {value}
    </span>
  );
};

export default Banner;
