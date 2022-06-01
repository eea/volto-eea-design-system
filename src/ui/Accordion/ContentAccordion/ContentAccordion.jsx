import React from 'react';
import { Accordion } from 'semantic-ui-react';

function ContentAccordion({ children, ...rest }) {
  return <Accordion className="eea contents">{children}</Accordion>;
}

ContentAccordion.Title = ({ children, ...rest }) => {
  return (
    <Accordion.Title
      active={rest.active}
      index={rest.index}
      onClick={rest.onClick}
    >
      {children}
    </Accordion.Title>
  );
};

ContentAccordion.Content = ({ children, ...rest }) => {
  return <Accordion.Content active={rest.active}>{children}</Accordion.Content>;
};

ContentAccordion.Description = ({ children }) => {
  return <p>{children}</p>;
};

ContentAccordion.Link = ({ children, ...rest }) => {
  return (
    <div className="read-more wrapper">
      <a href={rest.linkUrl}>{children}</a>
    </div>
  );
};

export default ContentAccordion;
