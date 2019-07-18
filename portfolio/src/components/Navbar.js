import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Media from "react-media";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
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

const bar = {
  background: "linear-gradient(45deg, #FE6B8B 10%, #FF8E53 100%)",
  margin: 0,
  borderRadius: 0,
  opacity: 0,
  padding: 5
};

const menuIcon = {
  borderRadius: 5,
  color: "rgb(0, 0, 0)",
  fontSize: 35
};

const opacityTransitionBar = {
  opacity: 0.9,
  transition: "opacity 2s"
};

const route = { opacity: 0 };

const opacityTransitionRoute = {
  opacity: 1,
  transition: "opacity 5s"
};

const logo = {
  maxHeight: 45,
  borderRadius: 50
};

const link = { textDecoration: "none" };

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      barStyle: bar,
      routeStyle: route
    };
  }

  handlingDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  handleTransition = () => {
    const {
      routeStyle: { opacity }
    } = this.state;

    if (opacity === 0) {
      this.handleSetStylesTransition(true);
    } else if (opacity === 1) {
      this.handleSetStylesTransition(false);
      this.handleSetStylesTransition(true);
    }
  };

  handleSetStylesTransition = interval => {
    if (interval === true) {
      setInterval(() => {
        this.setState({
          routeStyle: {
            ...this.state.routeStyle,
            ...opacityTransitionRoute
          }
        });
      }, 1000);
    } else {
      this.setState({
        routeStyle: {
          opacity: 0
        }
      });
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        barStyle: {
          ...this.state.barStyle,
          ...opacityTransitionBar
        }
      });
    }, 0);
    this.handleTransition();
  }

  render() {
    const { barStyle, routeStyle } = this.state;

    return (
      <Router>
        <div
          className="NavBarContainer"
          onClick={() => {
            if (this.state.open) this.handlingDrawer();
          }}
        >
          <AppBar color="secondary" position="fixed" style={barStyle}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={this.handlingDrawer}
              >
                <MenuIcon style={menuIcon} />
              </IconButton>

              <Link to={url}>
                <img
                  src={require("./../logo.png")}
                  alt="marcos bustamante mateo logo"
                  style={logo}
                />
              </Link>
              <Media query="(max-width: 599px)">
                {matches =>
                  matches ? null : (
                    <h4 style={{ margin: "auto" }}>Marcos Bustamante Mateo</h4>
                  )
                }
              </Media>
            </Toolbar>
          </AppBar>

          <Drawer
            variant="temporary"
            anchor="left"
            open={this.state.open}
            onClose={() => {}}
            transitionDuration={500}
          >
            <List>
              <Link
                onClick={this.handleTransition}
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
            </List>

            <Divider />
            <List>
              <Link onClick={this.handleTransition} to={url} style={link}>
                <ListItem button>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>

              <Link
                onClick={this.handleTransition}
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
                onClick={this.handleTransition}
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
              <Link
                onClick={this.handleTransition}
                to={url + "settings"}
                style={link}
              >
                <ListItem button>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary={"Settings"} />
                </ListItem>
              </Link>
            </List>
            <Divider />
          </Drawer>

          <div style={routeStyle}>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} component={route.main} />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
