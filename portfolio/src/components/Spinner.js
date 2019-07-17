import React, { Component } from "react";
import PixelSpinner from "@bit/bondz.react-epic-spinners.pixel-spinner";

const initial = {
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 100
};

const hidden = {
  display: "none"
};

class Spinner extends Component {
  constructor(props) {
    super(props);

    const { duration } = this.props;

    this.state = {
      style: initial,
      duration
    };
  }

  componentDidMount() {

    const { duration } = this.state;

    setTimeout(() => {
      this.setState({ style: { ...initial, ...hidden } });
    }, duration);
  }

  render() {

    const { style } = this.state;

    return <PixelSpinner color="#000000" size="200" style={style} />;
  }
}

export default Spinner;
