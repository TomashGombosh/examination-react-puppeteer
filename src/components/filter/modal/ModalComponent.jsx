import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import propTypes from 'prop-types';

const useStyles = makeStyles( ()=> ({
    modal: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: '350px',
        height: '300px',
        padding: '5px',
        border: '3px solid #D4AF37',
        borderRadius: '3px', 
        webkitBoxShadow: '13px 13px 11px 3px rgba(0,0,0,0.75)',
        mozBoxShadow: '13px 13px 11px 3px rgba(0,0,0,0.75)',
        boxShadow: '13px 13px 11px 3px rgba(0,0,0,0.75)'
    },
    subModal: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    filter : {
        width: '100px',
        height: '35px',
        marginTop: '15px',
        marginLeft: '10px',
        backgroundColor: '#D2691E',
        borderRadius: '10px',
        fontSize: '8px',
        "&:hover": {
            backgroundColor: '#F0E68C',
            webkitBoxShadow: '9px 2px 20px -3px rgba(218,165,32)',
            mozBoxShadow: '9px 2px 20px -3px rgba(218,165,32)',
            boxShadow: '9px 2px 20px -3px rgba(218,165,32)',
          }
    }
}))

const ModalComponent = (props) => {
    ModalComponent.propTypes = {
        open: propTypes.string.isRequired,
        value: propTypes.array.isRequired,
        setOpen: propTypes.func.isRequired,
        setCounter: propTypes.func.isRequired
    }

    const { value, open, setOpen, setCounter, counter } = props;
    const classes = useStyles();

    const handleApply = () => {
        setOpen(false);
    }

    const handleCancel = () => {
        setOpen(false);
    }

    return(
        open &&
        (<div className={classes.modal}>
            <div className={classes.subModal}>
            {value.map((object) => {
                return (<Button className={classes.filter} key={object.id} value={object.title}>{object.title}</Button>)
            })} 
            </div>
            <div style={{width: '100%', marginTop: '2em'}}> 
                <Button style={{ float: 'right' }} value='Apply' color='primary' onClick={handleApply}>Apply</Button>
                <Button style={{ float: 'left' }} value='Cancel' color='primary' onClick={handleCancel}>Cancel</Button>
            </div>
        </div>)
    )
};

export default ModalComponent;
