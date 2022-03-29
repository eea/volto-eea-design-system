import React from 'react';
import NewTabLabeledIcon from '../NewTabLabeledIcon/NewTabLabeledIcon';
import DownloadLabeledIcon from '../DownloadLabeledIcon/DownloadLabeledIcon';

function LabeledIconGroup({ children, ...rest }) {
    return (
        <div className="eea labeled icon group" {...rest}>
            {children}
        </div>
    );
}

LabeledIconGroup.Download = ({ children, ...rest }) => {
    return <div className='group wrapper'><DownloadLabeledIcon {...rest}>
        <DownloadLabeledIcon.Icon {...rest}>
            {rest.icon}
        </DownloadLabeledIcon.Icon>
        <DownloadLabeledIcon.Label>{rest.label}</DownloadLabeledIcon.Label>
        <DownloadLabeledIcon.Dropdown {...rest}></DownloadLabeledIcon.Dropdown>
    </DownloadLabeledIcon></div>;
};

LabeledIconGroup.NewTab = ({ children, ...rest }) => {
    return (
        <div className='group wrapper'><NewTabLabeledIcon {...rest}>
            <NewTabLabeledIcon.Icon {...rest}>
                {rest.icon}
            </NewTabLabeledIcon.Icon>
            <NewTabLabeledIcon.Label>{rest.label}</NewTabLabeledIcon.Label>
        </NewTabLabeledIcon></div>
    );
};

export default LabeledIconGroup;
