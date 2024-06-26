import React from 'react';
import cx from 'classnames';

function Video({ children, align }) {
  return <div className={cx('block video align', align)}>{children}</div>;
}

Video.Body = ({ children, align }) => (
  <div className={cx('video-inner', { 'full-width': align === 'full' })}>
    {children}
  </div>
);

Video.Embed = ({
  children,
  url,
  loop,
  autoPlay,
  align,
  placeholder_image,
  required_caption,
}) => {
  return (
    <video
      src={url}
      controls={!autoPlay}
      autoPlay={autoPlay}
      muted={autoPlay}
      loop={loop}
      poster={placeholder_image}
      type="video/mp4"
    >
      <track kind="captions" {...required_caption} />
      {children}
    </video>
  );
};

Video.Track = ({ tracks }) =>
  tracks.map((track, index) => {
    return <track {...track} />;
  });

export default Video;
