import React from 'react';

const SubFooter = (props) => {
  if (props.children) {
    return <div>{props.children}</div>;
  }
};

export default SubFooter;
