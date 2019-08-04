import React, { Component } from "react";
import Navbar from "./components/Navbar";
import FloatButtons from "./components/FloatButtons";
import ErrorModal from "./components/ErrorModal";

class App extends Component {
  constructor() {
    super();

    this.state = {
      openCopyModal: false,
      openRightButton: false
    };
  }

  handleCopyModal = () => {
    this.handleModals(false, false);
  };

  handleRightClickModal = () => {
    this.handleModals(false, false);
  };

  handleCopy = event => {
    event.preventDefault();
    this.handleModals(true, false);
  };

  handleRightClick = event => {
    event.preventDefault();
    this.handleModals(false, true)
  };

  handleModals = (copy, right) => {
    this.setState({ openRightButton: right, openCopyModal: copy });
  }

  render() {
    const { openCopyModal, openRightButton } = this.state;

    return (
      <div
        className="App"
        onCopy={this.handleCopy}
        onContextMenu={this.handleRightClick}
      >
        <ErrorModal
          title={'DO NOT COPY'}
          text={'Copy content is not allowed'}
          open={openCopyModal}
          handleClose={this.handleCopyModal}
        />

        <ErrorModal
          title={'DO NOT CLICK RIGHT BUTTON'}
          text={'Right button is not allowed'}
          open={openRightButton}
          handleClose={this.handleRightClickModal}
        />
        <Navbar />
        <FloatButtons />
      </div>
    );
  }
}

export default App;
