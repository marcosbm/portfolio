import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import SkillsScreen from "./../screens/SkillsScreen";
import ProfileScreen from "./../screens/ProfileScreen";
import ContactScreen from "./../screens/ContactScreen";
import CvScreen from "./../screens/CvScreen";
import ShareModal from "./ShareModal";
import Header from "./Header";
import Menu from "./Menu";

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
  },
  {
    path: url + "curriculum",
    main: () => <CvScreen />
  }
];

const bar = {
  background: "linear-gradient(45deg, #FE6B8B 10%, #FF8E53 100%)",
  margin: 0,
  borderRadius: 0,
  opacity: 0,
  padding: 5
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

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      barStyle: bar,
      routeStyle: route,
      openShareModal: false,
      logoClicked: false
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

  handleShareModal = () => {
    this.setState({ openShareModal: !this.state.openShareModal });
  };

  handleLogoClicked = () => {
    this.setState({ logoClicked: !this.state.logoClicked });
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
    const {
      barStyle,
      routeStyle,
      openShareModal,
      logoClicked,
      open
    } = this.state;

    return (
      <Router>
        <div
          className="NavBarContainer"
          onClick={() => {
            if (this.state.open) this.handlingDrawer();
          }}
        >
          <Header
            url={url}
            logoClicked={logoClicked}
            barStyle={barStyle}
            handlingDrawer={this.handlingDrawer}
            handleTransition={this.handleTransition}
          />

          <Menu
            url={url}
            handleTransition={this.handleTransition}
            handleShareModal={this.handleShareModal}
            open={open}
          />

          <ShareModal
            open={openShareModal}
            handleClose={this.handleShareModal}
          />

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

export default NavBar;
