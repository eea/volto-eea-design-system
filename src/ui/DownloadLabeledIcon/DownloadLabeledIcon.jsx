import React, { useState, useContext, createContext } from 'react';
import { Icon } from 'semantic-ui-react';

const DownloadContext = createContext();
function DownloadLabeledIcon({ children, ...rest }) {
    const [hidden, setHidden] = useState(true);
    return <DownloadContext.Provider value={{ hidden: hidden, setHidden: setHidden }}>
        <div className='eea download labeled icon'>
            {children}
        </div>
    </DownloadContext.Provider>
}

DownloadLabeledIcon.Label = ({ children, ...rest }) => {
    const context = useContext(DownloadContext);
    return <div className='label' onClick={() => context.setHidden(!context.hidden)}>{children}</div>
};

DownloadLabeledIcon.Icon = ({ children, ...rest }) => {
    const context = useContext(DownloadContext);
    return <div className='icon wrapper' onClick={() => context.setHidden(!context.hidden)}><Icon className={rest.icon} /></div>
};

DownloadLabeledIcon.Dropdown = ({ children, ...rest }) => {
    const context = useContext(DownloadContext);    
    return <div className='dropdown'>
        <div className={`link wrapper ${context.hidden ? 'hidden' : ''}`}>
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
};

export default DownloadLabeledIcon;