import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Header from './header';
import Navigation from './navigation';
import { ConfigContext } from '../../ConfigContext';
// import withWidth from '@material-ui/core/withWidth'
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  grow: {
    flexGrow: 1
  }
});

class Layout extends Component {
  static propTypes = {};
  state = {
    isNavOpen: false
  };
  NavigationToggle = (event, isNavOpen = !this.state.isNavOpen) => {
    this.setState({ isNavOpen });
    console.log(isNavOpen);
  };

  render() {
    const { classes } = this.props;
    return (
      <ConfigContext.Provider
        value={{
          navigation: {
            isOpen: this.state.isNavOpen,
            toggle: this.NavigationToggle
          }
        }}
      >
        <Header
          classes={{
            appBar: classes.appBar,
            menuButton: classes.menuButton,
            grow: classes.grow
          }}
        />
        <Navigation
          classes={{
            drawer: classes.drawer,
            drawerPaper: classes.drawerPaper,
            toolbar: classes.toolbar
          }}
        />
        <main className={classes.content + ' ' + classes.appBar}>
          <Grid container>{this.props.children}</Grid>
        </main>
      </ConfigContext.Provider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
