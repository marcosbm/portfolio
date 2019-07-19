import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const opacityTransition = {
  opacity: 1,
  transition: "opacity 2s"
};

const floatButton = {
  position: "fixed",
  left: "auto",
  top: "auto",
  margin: "0",
  right: 10,
  background: "linear-gradient(45deg, #FE6B8B 45%, #FF8E53 100%)",
  borderRadius: 30,
  opacity: 0
};

const contactButton = {
  bottom: 10
};

class FloatButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tootlTipVisible: false,
      mobile: false,
      open: false,
      contactButtonStyle: { ...floatButton, ...contactButton }
    };
  }

  handleToolTip = value => {
    this.setState({ tootlTipVisible: value });
  };

  handleContact = () => {
    const { mobile } = this.state;
    window.location.href = mobile
      ? "tel:+34645506946"
      : "mailto:marcosbustamantemateo@gmail.com";
  };

  detectDeviceType = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? true
      : false;
  };

  componentDidMount() {
    this.setState({
      mobile: this.detectDeviceType()
    });

    setInterval(() => {
      this.setState({
        contactButtonStyle: {
          ...this.state.contactButtonStyle,
          ...opacityTransition
        }
      });
    }, 0);
  }

  render() {
    const {
      tootlTipVisible,
      mobile,
      contactButtonStyle,
    } = this.state;

    return (
      <div>

        <Tooltip
          title={mobile ? "Call" : "Text"}
          placement="left"
          TransitionComponent={Zoom}
          open={tootlTipVisible}
        >
          <Fab
            onMouseEnter={() => this.handleToolTip(true)}
            onMouseLeave={() => this.handleToolTip(false)}
            onClick={() => {
              this.handleToolTip(false);
              this.handleContact();
            }}
            style={contactButtonStyle}
          >
            {mobile ? <CallIcon /> : <EmailIcon />}
          </Fab>
        </Tooltip>
      </div>
    );
  }
}

export default FloatButtons;
