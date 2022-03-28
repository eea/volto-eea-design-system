import React from 'react';

function DownloadLabeledIcon({ children, ...rest }) {
    return <div className='eea download labeled icon'>
        {children}
    </div>
}

DownloadLabeledIcon.Label = ({ children, ...rest }) => (
    <div className='label'>{children}</div>
);

DownloadLabeledIcon.Icon = ({ children, ...rest }) => (
    <div className='icon wrapper'>{children}</div>
);

DownloadLabeledIcon.Dropdown = ({ children, ...rest }) => (
    <div className='dropdown'>{children}</div>
);

export default DownloadLabeledIcon;