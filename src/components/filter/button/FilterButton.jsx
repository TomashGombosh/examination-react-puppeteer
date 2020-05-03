import React from 'react';
import Button from '@material-ui/core/Button';
import ModalComponent from '../modal/ModalComponent';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(()=>({
    modal: {
        width: '150px',
        height: '30px',
        marginTop: '10px',
        border: 2,
        background: '#0060B6',
        fontSize: 10,
        fontFamily: 'Comics',
        webkitBoxShadow: '9px -1px 15px -3px rgba(100,104,184,1)',
        mozBoxShadow: '9px -1px 15px -3px rgba(100,104,184,1)',
        boxShadow: '9px -1px 15px -3px rgba(100,104,184,1)',
        "&:hover": {
            backgroundColor: '#20B2AA',
            webkitBoxShadow: '9px 2px 20px -3px rgba(33,204,195,1)',
            mozBoxShadow: '9px 2px 20px -3px rgba(33,204,195,1)',
            boxShadow: '9px 2px 20px -3px rgba(33,204,195,1)',
          }
    }, 
 
}));

const FilterButton = (props) => {
    FilterButton.propTypes = {
        name: propTypes.string.isRequired,
        key: propTypes.number.isRequired,
        value: propTypes.object.isRequired,
    }
    const {key, name, value} = props;

    const [open, setOpen] = React.useState(false);
    const [counter, setCounter] = React.useState(0);
    
    const classes = useStyle();

    const openModal = () => {
        setOpen(true);
    }

    return(
        <div data-testid='button' style={{width: '150px'}}>
            <Button variant='outlined' key={key} className={classes.modal} onClick={openModal}>
                {name} ({counter})
            </Button>
            {console.log(value)}
            <div style={{float:'left'}}>
                <ModalComponent value={value} open={open} setOpen={setOpen} setCounter={setCounter} counter={counter}/>
            </div>
        </div>
    )
}

export default FilterButton;