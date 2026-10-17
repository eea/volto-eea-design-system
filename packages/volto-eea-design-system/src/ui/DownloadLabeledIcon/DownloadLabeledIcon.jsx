import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';

function DownloadLabeledIcon({ children, ...rest }) {
  return (
    <div className="eea download labeled icon">
      <Popup
        className="download-popup"
        trigger={rest.trigger}
        content={children}
        basic
        on="click"
        position="bottom center"
      />
    </div>
  );
}

const Label = ({ children, ...rest }) => {
  return <div className="label">{children}</div>;
};

const IconItem = ({ children, ...rest }) => {
  return (
    <div className="icon wrapper">
      <Icon className={rest.icon} />
    </div>
  );
};

const Dropdown = ({ children, ...rest }) => {
  return (
    <div className="dropdown">
      <div className="link wrapper">
        <ul>
          {rest.links !== null &&
            rest.links.map((item, index) => (
              <li key={index}>
                <a href={item.href}>
                  {item.linkName} <Icon className={rest.downloadIcon} />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

DownloadLabeledIcon.Label = Label;
DownloadLabeledIcon.Icon = IconItem;
DownloadLabeledIcon.Dropdown = Dropdown;

export default DownloadLabeledIcon;
