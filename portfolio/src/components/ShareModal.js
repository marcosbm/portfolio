import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import ShareButtons from "./ShareButtons";
import { withTranslation } from 'react-i18next';

const modal = { textAlign: "center" };

const title = { fontFamily: 'Walter Turncoat, cursive' };

class ShareModal extends Component {
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
        <h2 style={title}>{this.props.t('modal.share.title').toUpperCase()}</h2>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <span>
              <ShareButtons />
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            {this.props.t('modal.close')}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withTranslation('common')(ShareModal);
