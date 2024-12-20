import React from 'react';
import { Button } from 'semantic-ui-react';
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
      <DownloadLabeledIcon
        {...rest}
        trigger={
          <Button className="text">
            <DownloadLabeledIcon.Icon {...rest}>
              {rest.icon}
            </DownloadLabeledIcon.Icon>
            <DownloadLabeledIcon.Label>{rest.label}</DownloadLabeledIcon.Label>
          </Button>
        }
      >
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
      <LanguageLabeledIcon
        {...rest}
        trigger={
          <Button className="text">
            <LanguageLabeledIcon.Icon
              icon={rest.icon}
            ></LanguageLabeledIcon.Icon>
            <LanguageLabeledIcon.Label>{rest.label}</LanguageLabeledIcon.Label>
          </Button>
        }
      >
        <LanguageLabeledIcon.Dropdown
          items={rest.items}
        ></LanguageLabeledIcon.Dropdown>
      </LanguageLabeledIcon>
    </div>
  );
};

export default LabeledIconGroup;
