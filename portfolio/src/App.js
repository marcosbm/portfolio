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
    this.handleModal(false);
  };

  handleCopy = event => {
    event.preventDefault();
    this.handleModal(true);
  };

  handleModal = (value) => {
    this.setState({ openCopyModal: value });
  }

  componentDidMount() {

  }

  render() {
    const { openCopyModal } = this.state;

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

        <Navbar />
        <FloatButtons />
      </div>
    );
  }
}

export default App;
