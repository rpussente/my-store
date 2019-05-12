import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import NavigationMenu from "./NavigationMenu";
import { styles } from "./AppStyle";

import { connect } from "react-redux";
import { toggleMenu } from "../redux/actions";

class App extends React.PureComponent {
  render() {
    const { classes, isMenuOpen, toggleMenu } = this.props;

    return (
      <div className={classes.root}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            isMenuOpen && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!isMenuOpen} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={toggleMenu}
              className={classNames(
                classes.menuButton,
                isMenuOpen && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Minha loja
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !isMenuOpen && classes.drawerPaperClose
            )
          }}
          open={isMenuOpen}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={toggleMenu}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <NavigationMenu />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { isMenuOpen: state.menu.open };
};

const mapDispatchToProps = {
  toggleMenu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
