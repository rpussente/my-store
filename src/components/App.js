import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems } from "./listItems";
import { styles } from "./AppStyle";

import { connect } from "react-redux";
import { toggleMenu } from "../redux/actions";

class App extends React.Component {
  render() {
    const { classes, toggleMenu } = this.props;

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
            this.props.isMenuOpen && classes.appBarShift
          )}
        >
          <Toolbar
            disableGutters={!this.props.isMenuOpen}
            className={classes.toolbar}
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={toggleMenu}
              className={classNames(
                classes.menuButton,
                this.props.isMenuOpen && classes.menuButtonHidden
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
              !this.props.isMenuOpen && classes.drawerPaperClose
            )
          }}
          open={this.props.isMenuOpen}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={toggleMenu}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
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
