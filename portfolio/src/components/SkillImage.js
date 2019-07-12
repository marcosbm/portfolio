import React, { Component } from "react";

const imgContainer = {
  margin: 10,
  border: "4px solid black",
  textAlign: "center",
  height: 170,
  width: 170,
  borderRadius: "100%",
  display: "inline-block",
  backgroundColor: "rgb(238, 237, 237)"
};

const imgContainerHover = {
  margin: 10,
  border: "4px solid black",
  textAlign: "center",
  height: 170,
  width: 170,
  borderRadius: "100%",
  display: "inline-block",
  backgroundColor: "#2C3335"
};

const img = { height: 100, width: 100, maxWidth: 120, margin: 15 };

class SkillImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: true
    };
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const { hover } = this.state;
    const { name, src } = this.props;

    return (
      <div
        style={hover ? imgContainer : imgContainerHover}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <img src={src} alt={name + " logo"} style={img} />
        <br />

        <b
          style={
            hover
              ? {
                  color: "#2F363F"
                }
              : {
                  color: "rgb(238, 237, 237)"
                }
          }
        >
          {name.toUpperCase()}
        </b>
      </div>
    );
  }
}

export default SkillImage;
