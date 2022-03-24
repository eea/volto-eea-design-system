import React from 'react';
import { Accordion, Icon } from 'semantic-ui-react';


function ContentAccordion({ children, ...rest }) {
    return <Accordion className='eea read more'>
        {children}
    </Accordion>;

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
}

ContentAccordion.Content = ({ children, ...rest }) => {

    return (
        <Accordion.Content active={rest.active}>
            {children}
        </Accordion.Content>
    )
};

ContentAccordion.Description = ({ children }) => {
    return <p>{children}</p>
};

ContentAccordion.Link = ({ children, ...rest }) => {
    return (
        <p className='read more link wrapper'><a href={rest.linkUrl} className="read more link">
            {children}
        </a></p>
    );
}

export default ContentAccordion;