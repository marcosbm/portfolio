import React, { Component } from "react";
import Media from "react-media";
import backgroundHome from "./../images/backgroundHome.jpg";

const container = {
  backgroundImage: "url(" + backgroundHome + ")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  position: "fixed",
  bottom: 0
};

const text = {
  textAlign: "left",
  color: "rgb(255, 255, 255)",
  font: "30px Helvetica, Sans-Serif",
  padding: 10,
  borderLeft: "3px solid rgb(0, 0, 0, 0.7)",
  backgroundColor: "rgb(175, 175, 175, 0.7)",
  position: "relative",
  top: 140
};

const textPc = {
  font: "30px Helvetica, Sans-Serif",
  marginLeft: "20%"
};

const textMobile = {
  font: "20px Helvetica, Sans-Serif",
  marginLeft: 30
};

const title = {
  display: "inline",
  position: "relative",
  letterSpacing: "-5px",
  color: "rgba(0,0,255,0.6)",
  marginTop: 10,
  top: 70
};

const titlePc = {
  font: "200px Helvetica, Sans-Serif"
};

const titleMobile = {
  font: "110px Helvetica, Sans-Serif"
};

const titleAfter = {
  content: "Hello",
  position: "absolute",
  top: "5px",
  color: "rgba(255,0,0,0.6)"
};

const titleAfterPc = {
  left: "10px"
};

const titleAfterMobile = {
  left: "6px"
};

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  title = (titleStyle, titleAfterStyle) => {
    return (
      <div>
        <h1 style={{ ...title, ...titleStyle }}>
          Hello
          <span style={{ ...titleAfter, ...titleAfterStyle }}>Hello</span>
        </h1>
        <br />
        <h1 style={{ ...title, ...titleStyle }}>
          world!
          <span style={{ ...titleAfter, ...titleAfterStyle }}>world!</span>
        </h1>
      </div>
    );
  };

  text = (textStyle, textStyleDevice) => {
    return (
      <div style={{ ...textStyle, ...textStyleDevice }}>
        I´m Marcos Bustamante,
        <br /> Software developer <br />
        Based in Seville
      </div>
    );
  };

  componentDidMount() {
    document.title = "Marcos Bustamante Mateo";
  }

  render() {
    return (
      <div className="Home ScreenContainer" style={container}>
        <div>
          <Media query="(max-width: 599px)">
            {matches =>
              matches
                ? this.title(titleMobile, titleAfterMobile)
                : this.title(titlePc, titleAfterPc)
            }
          </Media>
        </div>

        <Media query="(max-width: 599px)">
          {matches =>
            matches ? this.text(text, textMobile) : this.text(text, textPc)
          }
        </Media>
      </div>
    );
  }
}

export default HomeScreen;
