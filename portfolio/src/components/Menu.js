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
          <Link
            onClick={handleTransition}
            to={url + "profile"}
            style={link}
          >
            <ListItem button>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary={"Profile"} />
            </ListItem>
          </Link>
          {/*<Link
                onClick={this.handleTransition}
                to={url + "curriculum"}
                style={link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <InsertDriveFile />
                  </ListItemIcon>
                  <ListItemText primary={"My CV"} />
                </ListItem>
              </Link>*/}
        </List>

        <Divider />
        <List>
          <Link onClick={handleTransition} to={url} style={link}>
            <ListItem button>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>

          <Link
            onClick={handleTransition}
            to={url + "skills"}
            style={link}
          >
            <ListItem button>
              <ListItemIcon>
                <Code />
              </ListItemIcon>
              <ListItemText primary={"Skills"} />
            </ListItem>
          </Link>

          <Link
            onClick={handleTransition}
            to={url + "contact"}
            style={link}
          >
            <ListItem button>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary={"Contact"} />
            </ListItem>
          </Link>
        </List>

        <Divider />
        <List>
          <ListItem button onClick={handleShareModal}>
            <ListItemIcon>
              <ShareIcon />
            </ListItemIcon>
            <ListItemText primary={"Share"} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    );
  }
}

export default Menu;
