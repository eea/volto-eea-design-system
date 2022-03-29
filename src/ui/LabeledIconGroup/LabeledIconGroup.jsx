import React from 'react';
import NewTabLabeledIcon from '../NewTabLabeledIcon/NewTabLabeledIcon';
import DownloadLabeledIcon from '../DownloadLabeledIcon/DownloadLabeledIcon';
import LanguageLabeledIcon from '../LanguageLabeledIcon/LanguageLabeledIcon';

function LabeledIconGroup({ children, ...rest }) {
  return (
    <div className="eea labeled icon group" {...rest}>
      {children}
    </div>
  );
}

LabeledIconGroup.Download = ({ children, ...rest }) => {
  return (
    <div className="group wrapper">
      <DownloadLabeledIcon {...rest}>
        <DownloadLabeledIcon.Icon {...rest}>
          {rest.icon}
        </DownloadLabeledIcon.Icon>
        <DownloadLabeledIcon.Label>{rest.label}</DownloadLabeledIcon.Label>
        <DownloadLabeledIcon.Dropdown {...rest}></DownloadLabeledIcon.Dropdown>
      </DownloadLabeledIcon>
    </div>
  );
};

LabeledIconGroup.NewTab = ({ children, ...rest }) => {
  return (
    <div className="group wrapper">
      <NewTabLabeledIcon {...rest}>
        <NewTabLabeledIcon.Icon {...rest}>{rest.icon}</NewTabLabeledIcon.Icon>
        <NewTabLabeledIcon.Label>{rest.label}</NewTabLabeledIcon.Label>
      </NewTabLabeledIcon>
    </div>
  );
};

LabeledIconGroup.Language = ({ children, ...rest }) => {
  return (
    <div className="group wrapper">
      <LanguageLabeledIcon {...rest}>
        <LanguageLabeledIcon.Icon icon={rest.icon}></LanguageLabeledIcon.Icon>
        <LanguageLabeledIcon.Label>{rest.title}</LanguageLabeledIcon.Label>
        <LanguageLabeledIcon.Dropdown
          items={rest.items}
        ></LanguageLabeledIcon.Dropdown>
      </LanguageLabeledIcon>
    </div>
  );
};

export default LabeledIconGroup;
