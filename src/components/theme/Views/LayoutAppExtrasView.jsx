import React from 'react';
import { BodyClass } from '@plone/volto/helpers';

const LayoutAppExtrasView = (props) => {
  return <BodyClass className={props.content?.layout} />;
};

export default LayoutAppExtrasView;
