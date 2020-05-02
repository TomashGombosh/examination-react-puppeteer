import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles( ()=> ({
    modal: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginTop: '1em',
        width: '250px',
        height: '125px',
        padding: '5px',
        border: '3px solid #D4AF37',
        borderRadius: '3px', 
        webkitBoxShadow: '13px 13px 11px 3px rgba(0,0,0,0.75)',
        mozBoxShadow: '13px 13px 11px 3px rgba(0,0,0,0.75)',
        boxShadow: '13px 13px 11px 3px rgba(0,0,0,0.75)'
    },
    filter : {
        width: '100px',
        height: '35px',
        marginTop: '15px',
        marginLeft: '10px',
        backgroundColor: '#D2691E',
        borderRadius: '10px',
        "&:hover": {
            backgroundColor: '#F0E68C',
            webkitBoxShadow: '9px 2px 20px -3px rgba(218,165,32)',
            mozBoxShadow: '9px 2px 20px -3px rgba(218,165,32)',
            boxShadow: '9px 2px 20px -3px rgba(218,165,32)',
          }
    }
}))

const ModalComponent = (props) => {
    const { value, open, setOpen, setName } = props;
    const classes = useStyles();

    const buttons = (id, title) => {
        return(<div key={id} >
            
        </div>)
    }

    const handleOpen = (e) => {
        setOpen(false);
        setName(e.target.value)
        console.log(e.target.value);
    }


    return(
        open &&
        <div className={classes.modal}>
            {/* {value.map((id, title) => {
                buttons(id, title)
            })} */}
            <Button className={classes.filter} onClick={handleOpen} value='1'>title</Button>
            <Button className={classes.filter} onClick={handleOpen} value='2'>title</Button>
            <Button className={classes.filter} onClick={handleOpen} value='3'>title</Button>
            <Button className={classes.filter} onClick={handleOpen} value='4'>title</Button>
        </div>
    )
};

export default ModalComponent;
