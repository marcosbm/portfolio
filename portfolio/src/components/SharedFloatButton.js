import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import ShareIcon from "@material-ui/icons/Share";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import ShareButtons from "./ShareButtons";

class SharedFloatButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tootlTipVisible: false,
      mobile: false,
      open: false
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

  handleOpenShare = () => {
    this.setState({ open: true });
  };

  handleCloseShare = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    this.setState({
      mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? true
        : false
    });
  }

  render() {
    const { tootlTipVisible, mobile, open } = this.state;

    return (
      <div>
        <Tooltip
          title="Share"
          placement="left"
          TransitionComponent={Zoom}
          open={tootlTipVisible}
        >
          <Fab
            onMouseEnter={() => this.handleToolTip(true)}
            onMouseLeave={() => this.handleToolTip(false)}
            onClick={() => {
              this.handleToolTip(false);
              this.handleOpenShare();
            }}
            style={{
              position: "fixed",
              left: "auto",
              top: "auto",
              margin: "0",
              right: 20,
              bottom: 20,
              background: "linear-gradient(45deg, #FE6B8B 45%, #FF8E53 100%)",
              borderRadius: 30
            }}
          >
            <ShareIcon />
          </Fab>
        </Tooltip>

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
            style={{
              position: "fixed",
              left: "auto",
              top: "auto",
              margin: "0",
              right: 20,
              bottom: 90,
              background: "linear-gradient(45deg, #FE6B8B 45%, #FF8E53 100%)",
              borderRadius: 30
            }}
          >
            {mobile ? <CallIcon /> : <EmailIcon />}
          </Fab>
        </Tooltip>

        <Dialog
          open={open}
          keepMounted
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          style={{ textAlign: 'center' }}
        >
          <DialogTitle id="alert-dialog-slide-title">{"Share via"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div>
                <ShareButtons />
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseShare} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default SharedFloatButton;
