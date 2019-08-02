import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";

const modal = { textAlign: "center" };

class CopyModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { open, handleClose } = this.props;

    return (
      <Dialog
        open={open}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={modal}
      >
        <h3>DO NOT COPY</h3>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <span>
              Copy content is not allowed
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default CopyModal;
