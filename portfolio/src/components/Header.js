import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Media from "react-media";

const menuIcon = {
  borderRadius: 5,
  color: "rgb(0, 0, 0)",
  fontSize: 35
};

const logo = {
  maxHeight: 45,
  borderRadius: 50,
  transition: "transform .4s"
};

const logoClickedStyle = {
  transition: "transform .3s",
  transform: "scale(0.85)"
};

const titleNavBar = {
  margin: "auto",
  fontFamily: "Permanent Marker, cursive",
  textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { url, logoClicked, barStyle, handlingDrawer } = this.props;

    return (
        <AppBar color="secondary" position="fixed" style={barStyle}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={handlingDrawer}
            >
              <MenuIcon style={menuIcon} />
            </IconButton>

            <Link to={url} onClick={this.handleTransition}>
              <img
                src={require("./../images/logo.png")}
                alt="marcos bustamante mateo logo"
                style={logoClicked ? { ...logo, ...logoClickedStyle } : logo}
                onMouseDown={this.handleLogoClicked}
                onMouseUp={this.handleLogoClicked}
              />
            </Link>
            <Media query="(max-width: 599px)">
              {matches =>
                matches ? null : (
                  <h2 style={titleNavBar}>Marcos Bustamante Mateo</h2>
                )
              }
            </Media>
          </Toolbar>
        </AppBar>
    );
  }
}

export default Header;
