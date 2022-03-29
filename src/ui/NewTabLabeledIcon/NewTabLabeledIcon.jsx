import React from 'react';
import { Icon } from 'semantic-ui-react';

function NewTabLabeledIcon({ children, ...rest }) {
    return <div className='eea new tab labeled icon'>
        {children}
    </div>
}

NewTabLabeledIcon.Label = ({ children, ...rest }) => {
    return <div className='label' onClick={() => context.setHidden(!context.hidden)}>{children}</div>
};

NewTabLabeledIcon.Icon = ({ children, ...rest }) => {
    return <div className='icon wrapper' onClick={() => context.setHidden(!context.hidden)}><Icon className={rest.icon} /></div>
};

export default NewTabLabeledIcon;