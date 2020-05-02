import React from 'react';
import FilterComponent from './components/filter/FilterComponent';

import { makeStyles } from '@material-ui/core/styles';

const image = require('./resources/images/logo.png');
const useStyles = makeStyles(theme => ({
  header: {
    width: '100%',
    height: '125px'
  },
  logo: {
    width: '100px',
    height: '100px',
    margin: theme.spacing(3),
}
}))

const App = () => {
  const classes = useStyles();
  return (
    <div data-testid='appilication'>
    <header className={classes.header}>
      <div data-testid='logo' className={classes.logo} >
        <img src={image} alt='Logo' style={{ width: '100px', height: '100px' }}/>
      </div>
    </header>
    <FilterComponent/>
    </div>
  );
}

export default App;
