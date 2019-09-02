import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Home from "@material-ui/icons/Home";
import Code from "@material-ui/icons/Code";
import Mail from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShareIcon from "@material-ui/icons/Share";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

const link = { textDecoration: "none" };

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { url, handleTransition, handleShareModal, open } = this.props;

    return (
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={() => {}}
        transitionDuration={500}
        className="Ancho"
      >
        <List>
          <Link onClick={handleTransition} to={url} style={link}>
            <ListItem button>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={this.props.t('menu.home')} />
            </ListItem>
          </Link>
        </List>

        <Divider />
        <List>
          <Link onClick={handleTransition} to={url + "profile"} style={link}>
            <ListItem button>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary={this.props.t('menu.profile')} />
            </ListItem>
          </Link>
          <Link
            onClick={this.handleTransition}
            to={url + "curriculum"}
            style={link}
          >
            <ListItem button>
              <ListItemIcon>
                <InsertDriveFile />
              </ListItemIcon>
              <ListItemText primary={this.props.t('menu.cv')} />
            </ListItem>
          </Link>

          <Link onClick={handleTransition} to={url + "skills"} style={link}>
            <ListItem button>
              <ListItemIcon>
                <Code />
              </ListItemIcon>
              <ListItemText primary={this.props.t('menu.skills')} />
            </ListItem>
          </Link>

          <Link onClick={handleTransition} to={url + "contact"} style={link}>
            <ListItem button>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary={this.props.t('menu.contact')} />
            </ListItem>
          </Link>
        </List>

        <Divider />
        <List>
          <ListItem button onClick={handleShareModal}>
            <ListItemIcon>
              <ShareIcon />
            </ListItemIcon>
            <ListItemText primary={this.props.t('menu.share')} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    );
  }
}

export default withTranslation('common')(Menu);
