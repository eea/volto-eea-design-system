import React, { useState, createContext, useContext } from 'react';
import { Label, Icon, Grid, Checkbox } from 'semantic-ui-react'

const FilterContext = createContext();

const FaqFilter = ({ children, ...rest }) => {
    const [selected, setSelected] = useState([]);
    const [active, setActive] = useState(false);

    const toggleFilter = (data) => {
        if (data.checked) {
            setSelected(oldArray => [...oldArray, data.label])
        } else {
            setSelected(oldArray => oldArray.filter(filter => filter !== data.label))
        }
    }

    const removeFilter = (data) => {
        setSelected(oldArray => oldArray.filter(filter => filter !== data))
    }

    const clearFilters = () => {
        setSelected([]);
    }


    return (
        <FilterContext.Provider value={{ 'selected': selected, 'toggleFilter': toggleFilter, 'removeFilter': removeFilter, 'clearFilters': clearFilters, 'active': active, 'setActive': setActive }}>
            <div className='eea faq filter box' {...rest}>
                {children}
            </div>
        </FilterContext.Provider>
    );
}

const Menu = ({ children, ...rest }) => {
    const context = useContext(FilterContext);
    return (
        <div className={`menu row ${context.active ? 'active' : ''}`}>
            <div className='wrapper'>
                <div className='filter title'>{rest.filterText}</div>
                <div className={`arrow ${context.active ? 'up' : ''} `} onClick={() => context.setActive(!context.active)}><Icon className="ri-arrow-down-s-line" /></div>
                <div className={`clear ${context.selected.length > 0 ? '' : 'hidden'}`} onClick={() => context.clearFilters()}>{rest.clearText}</div>
            </div>
            <div className={`results ${context.selected.length > 0 ? '' : 'hidden'}`}>{rest.resultCount}</div>
        </div>
    );
};

const Active = ({ children, ...rest }) => {
    const context = useContext(FilterContext);
    return (
        <div className={`selected wrapper`}>
            {context.selected.length > 0 && context.selected.map((active) => (
                <Label>{active}<Icon name='delete' onClick={() => context.removeFilter(active)} /></Label>
            ))}
        </div>
    );
};

const Filters = ({ children, ...rest }) => {
    const context = useContext(FilterContext);

    return <div className={`${context.active ? '' : 'hidden'}`} >
        <Grid>
            {rest.filters.map((filter) => (
                <Grid.Column mobile={12} tablet={4} computer={4}>
                    <Checkbox label={filter.label} id={filter.id} checked={context.selected.indexOf(filter.label) > -1} onChange={(e, d) => context.toggleFilter(d)} />
                </Grid.Column>
            ))}
        </Grid>
    </div>;
};

FaqFilter.Menu = Menu;
FaqFilter.Filters = Filters;
FaqFilter.Active = Active;

export default FaqFilter;