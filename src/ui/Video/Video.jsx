import React from 'react';
import cx from 'classnames';

function Video ({ children, align }) {
  return <div className={cx('block video align', align)}>{children}</div>;
}

Video.Body = ({ children, align }) => (
  <div className={cx('video-inner', { 'full-width': align === 'full' })}>
    {children}
  </div>
);

Video.Embed = ({ url, loop, autoPlay, align, placeholder_image }) => {
    <video
      src={url}
      controls={!autoPlay}
      autoPlay={autoPlay}
      muted={autoPlay}
      loop={loop}
      poster={placeholder_image}
      type="video/mp4"
    />
};

Video.Track = ({ tracks }) => {

  tracks.map((track, index) => {
    console.log(track.src);
    //const loadTrack = require(`file-loader!${track.src}`);
    <track src={track.src} kind="subtitles" srclang={track.code} label={track.lang} />
  });
}

export default Video;
