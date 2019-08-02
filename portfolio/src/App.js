import React, { Component } from "react";
import Navbar from "./components/Navbar";
import FloatButtons from "./components/FloatButtons";
import CopyModal from "./components/CopyModal";

class App extends Component {
  constructor() {
    super();

    this.state = {
      openCopyModal: false
    };
  }

  handleCopyModal = () => {
    this.setState({ openCopyModal: !this.state.openCopyModal });
  };

  handleCopy = event => {
    event.preventDefault();
    this.setState({ openCopyModal: true });
  };

  handleRightClick = event => {
    event.preventDefault();
  };

  render() {
    const { openCopyModal } = this.state;

    return (
      <div
        className="App"
        onCopy={this.handleCopy}
        onContextMenu={this.handleRightClick}
      >
        <CopyModal open={openCopyModal} handleClose={this.handleCopyModal} />
        <Navbar />
        <FloatButtons />
      </div>
    );
  }
}

export default App;
