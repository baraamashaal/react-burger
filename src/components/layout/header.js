import React, { useContext } from 'react';
// import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {ConfigContext} from '../../ConfigContext';

function Header(props) {
  const config = useContext(ConfigContext);
  const { classes } = props;
  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={config.navigation.toggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Logo
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {};

export default Header;
