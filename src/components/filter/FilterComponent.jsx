import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilterButton from '../filter/button/FilterButton';

const filterOptions = require('../../resources/static/zFilterOptions.json');

const useStyles = makeStyles(() => ({
    filter: {
        margin: '0.5%',
        width: '99%',
        height: '3em',
        border: '2px solid',
        borderRadius: '7px '
    }
}));

const FilterComponent = () => {
    const classes = useStyles();

    return (
        <div data-testid='filter' className={classes.filter} >
            <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row'}}>
                {Object.entries(filterOptions).map(([keys, value, index]) => {
                    return (<span style={{marginLeft: '3em'}}><FilterButton key={index} name={keys} value={value}/></span>)})
                }
            </div>
        </div>
    )
}
export default FilterComponent;

