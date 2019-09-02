import React, { Component } from "react";
import Navbar from "./components/Navbar";
import FloatButtons from "./components/FloatButtons";
import ErrorModal from "./components/ErrorModal";
import { withTranslation } from 'react-i18next';

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
          title={this.props.t('modal.copy.title').toUpperCase()}
          text={this.props.t('modal.copy.content')}
          open={openCopyModal}
          handleClose={this.handleCopyModal}
        />

        <Navbar />
        <FloatButtons />
      </div>
    );
  }
}

export default withTranslation('common')(App);
