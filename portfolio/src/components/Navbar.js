import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Home from "@material-ui/icons/Home";
import Code from "@material-ui/icons/Code";
import Settings from "@material-ui/icons/Settings";
import Mail from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";

// Screens
import HomeScreen from "../screens/HomeScreen";
import SkillsScreen from "./../screens/SkillsScreen";
import ProfileScreen from "./../screens/ProfileScreen";
import ContactScreen from "./../screens/ContactScreen";

const url = "/";

const routes = [
  {
    path: url + "profile",
    main: () => <ProfileScreen />
  },
  {
    path: url + url,
    main: () => <HomeScreen />
  },
  {
    path: url + "skills",
    main: () => <SkillsScreen />
  },
  {
    path: url + "contact",
    main: () => <ContactScreen />
  },
  {
    path: url + "settings",
    main: () => <HomeScreen />
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handlingDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <Router>
        <div
          className="NavBarContainer"
          onClick={() => {
            if (this.state.open) this.handlingDrawer();
          }}
        >
          <AppBar
            color="secondary"
            position="fixed"
            style={{
              background: "linear-gradient(45deg, #FE6B8B 10%, #FF8E53 100%)",
              margin: 12,
              borderRadius: 0
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={this.handlingDrawer}
              >
                <MenuIcon
                  style={{
                    borderRight: "0px solid black",
                    borderRadius: 5,
                    color: "black",
                    fontSize: 30
                  }}
                />
              </IconButton>
              <Typography
                styles={{ flexGrow: 1, alignItems: "center" }}
                variant="h5"
                color="inherit"
              />

              <Link to={url}>
                <img
                  src={require("./../logo.png")}
                  alt="marcos bustamante mateo logo"
                  style={{ maxHeight: 40, borderRadius: 50 }}
                />
              </Link>
            </Toolbar>
          </AppBar>

          <SwipeableDrawer
            variant="temporary"
            anchor=""
            open={this.state.open}
            onOpen={() => {}}
            onClose={() => {}}
            swipeAreaWidth={400}
            hysteresis={0.8}
            disableDiscovery={true}
          >
            <List>
              <Link to={url + "profile"} style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText primary={"Profile"} />
                </ListItem>
              </Link>
            </List>

            <Divider />
            <List>
              <Link to={url} style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>

              <Link to={url + "skills"} style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <Code />
                  </ListItemIcon>
                  <ListItemText primary={"Skills"} />
                </ListItem>
              </Link>

              <Link to={url + "contact"} style={{ textDecoration: "none" }}>
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
              <Link to={url + "settings"} style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary={"Settings"} />
                </ListItem>
              </Link>
            </List>
          </SwipeableDrawer>

          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
              onClick={this.handlingDrawer}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
