import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const paper = {
  marginLeft: "auto",
  marginRight: "auto",
  padding: 7,
  boxShadow: "0 5px 10px 0 #2C3335",
  marginBottom: 15
};

const paperHover = {
  backgroundColor: "#2C3335",
  color: "rgb(238, 237, 237)"
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
            <h3>{title.toUpperCase()}</h3>
            <Divider style={hover ? dividerHover : null} />
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
