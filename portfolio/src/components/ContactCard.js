import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const paper = {
  marginLeft: "auto",
  marginRight: "auto",
  padding: 7,
  boxShadow: "0 5px 10px 0 #2C3335",
  marginBottom: 25,
  transition: "transform .3s",
  background: "linear-gradient(45deg, #000000, #434343)",
  color: "rgb(238, 237, 237)",
  borderRadius: 5,
};

const paperHover = {
  background: "linear-gradient(45deg, #2C3335, #434343)",
  transition: "transform .3s",
  transform: "scale(1.1)"
};

const text = {
  display: "inline-block",
  wordBreak: "break-all"
};

const img = {
  maxWidth: 70,
  width: "100%",
  heigth: "100%"
};

const dividerHover = {
  backgroundColor: "rgb(238, 237, 237)"
};

const titleStyle = {
  fontFamily: 'Walter Turncoat, cursive'
};

class ContactCard extends Component {
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
    const { title, src, content, href, paperStyle } = this.props;

    return (
      <div
        style={
          hover
            ? { ...paper, ...paperStyle, ...paperHover }
            : { ...paper, ...paperStyle }
        }
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <h3 style={titleStyle}>{title.toUpperCase()}</h3>
            <Divider style={hover ? dividerHover : dividerHover} />
          </Grid>

          <Grid item xs={3}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={src} alt={"logo of " + title} style={img} />
            </a>
          </Grid>
          <Grid item xs={9}>
            <p style={text}>{content}</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ContactCard;
