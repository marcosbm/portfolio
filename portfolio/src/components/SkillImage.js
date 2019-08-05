import React, { Component } from "react";

const imgContainer = {
  margin: 15,
  textAlign: "center",
  height: 170,
  width: 170,
  maxWidth: "70%",
  borderRadius: "100%",
  display: "inline-block",
  background: "rgb(238, 237, 237)",
  transition: "transform .6s",
  padding: 5
};

const imgContainerHover = {
  background: "linear-gradient(45deg, #2C3335, #434343)",
  transition: "transform .3s",
  transform: "scale(1.1)"
};

const img = {
  height: 100,
  width: 100,
  maxWidth: "80%",
  margin: 15,
  transition: "transform .6s"
};

const imgHover = {
  transition: "transform .3s",
  transform: "scale(1.1)"
};

const title = {
  color: "#2F363F"
};

const titleHover = {
  color: "rgb(238, 237, 237)"
};

class SkillImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  handleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const { hover } = this.state;
    const { name, src, href } = this.props;

    return (
      <div
        style={hover ? { ...imgContainer, ...imgContainerHover } : imgContainer}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img
            src={src}
            alt={name + " logo"}
            style={hover ? { ...img, ...imgHover } : img}
          />
        </a>
        <br />

        <b style={hover ? titleHover : title}>{name.toUpperCase()}</b>
      </div>
    );
  }
}

export default SkillImage;
