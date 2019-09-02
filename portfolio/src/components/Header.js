import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Media from "react-media";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withTranslation } from "react-i18next";
import Language from "@material-ui/icons/Language";

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

const iconLanguageStyle = {
  position: "fixed",
  left: "auto",
  top: "auto",
  right: 70,
  color: "black"
};

const languageStyle = {
  position: "fixed",
  left: "auto",
  top: "auto",
  right: 10,
  color: "white",
  fontWeight: "bold"
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languageValue: "en"
    };
  }

  handleClose = () => {};

  handleOpen = () => {};

  handleChange = event => {
    const { i18n } = this.props;
    const language = event.target.value;
    this.setState({ languageValue: event.target.value });
    i18n.changeLanguage(language);
  };

  render() {
    const {
      url,
      logoClicked,
      barStyle,
      handlingDrawer,
      handleTransition
    } = this.props;

    const { languageValue } = this.state;

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

          <Link to={url} onClick={handleTransition}>
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
          <Language style={iconLanguageStyle} />
          <Select
            value={languageValue}
            onOpen={this.handleOpen}
            onChange={this.handleChange}
            onClose={this.handleClose}
            style={languageStyle}
          >
            <MenuItem value={"es"}>
              ES
              {/*<img src={require("./../images/flag-spain.svg")} alt="spain flag" />*/}
            </MenuItem>
            <MenuItem value={"en"}>
              EN
              {/*<img src={require("./../images/flag-uk.svg")} alt="uk flag" />*/}
            </MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withTranslation("common")(Header);
