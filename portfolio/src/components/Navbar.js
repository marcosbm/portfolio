import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Home from "@material-ui/icons/Home";
import Code from "@material-ui/icons/Code";
import ShareIcon from "@material-ui/icons/Share";
import Settings from "@material-ui/icons/Settings";
import Mail from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Screens
import HomeScreen from "../screens/HomeScreen";

const url = '/';

const routes = [
  {
    path: url,
    exact: true,
    main: () => <HomeScreen />
  },
  {
    path: url + 'recetas',
    main: () => <HomeScreen />
  },
  {
    path: url + 'social',
    main: () => <HomeScreen />
  },
  {
    path: url + 'calendario',
    main: () => <HomeScreen />
  },
  {
    path: url + 'inventario',
    main: () => <HomeScreen />
  },
  {
    path: url + 'ajustes',
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
        <div className="NavBarContainer" onClick={() => {
          if (this.state.open)
            this.handlingDrawer();
        }}>
          <AppBar color="secondary" position="fixed">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={this.handlingDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Typography styles={{ flexGrow: 1 }} variant="h5" color="inherit">
                Logo Marcos Bustamante Mateo
              </Typography>

            </Toolbar>
          </AppBar>

          <SwipeableDrawer 
            variant="persistent" 
            anchor="left" 
            open={this.state.open} 
            onOpen={() => {}} 
            onClose={() => {}}
            swipeAreaWidth={400}
            hysteresis={0.8}
            disableDiscovery={true}
          >
            <div>
              <IconButton>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />

            <List>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary={"Profile"} />
              </ListItem>
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

              <Link to={url + "recetas"} style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <Code />
                  </ListItemIcon>
                  <ListItemText primary={"Skills"} />
                </ListItem>
              </Link>

              <Link to={url + "inventario"} style={{ textDecoration: "none" }}>
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
              <Link to={url + "ajustes"} style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary={"Ajustes"} />
                </ListItem>
              </Link>

              <ListItem button>
                <ListItemIcon>
                  <ShareIcon />
                </ListItemIcon>
                <ListItemText primary={"Compartir"} />
              </ListItem>
            </List>
          </SwipeableDrawer>

          <br />
          <br />
          <br />
          <br />

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
