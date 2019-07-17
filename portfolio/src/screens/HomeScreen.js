import React, { Component } from "react";
import Spinner from "../components/Spinner";
import Media from "react-media";

const container = {
  backgroundImage:
    "url(https://img.fotocommunity.com/plaza-espaa-sunset-sevilla-2cdff009-9e8f-4e44-b9c3-d5d1e9dcde95.jpg?height=1080)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  padding: 15,
  position: "fixed"
};

const text = {
  textAlign: "left",
  color: "rgb(255, 255, 255)",
  font: "30px Helvetica, Sans-Serif",
  padding: 10,
  margin: 10,
  backgroundColor: "rgb(175, 175, 175, 0.7)"
};

const textMobile = {
  textAlign: "left",
  color: "rgb(255, 255, 255)",
  font: "20px Helvetica, Sans-Serif",
  padding: 10,
  margin: 10,
  backgroundColor: "rgb(175, 175, 175, 0.7)"
};

const title = {
  display: "inline",
  position: "relative",
  font: "200px Helvetica, Sans-Serif",
  letterSpacing: "-5px",
  color: "rgba(0,0,255,0.6)"
};

const titleAfter = {
  content: "Hello",
  position: "absolute",
  left: "10px",
  top: "5px",
  color: "rgba(255,0,0,0.6)"
};

const titleMobile = {
  display: "inline",
  position: "relative",
  font: "110px Helvetica, Sans-Serif",
  letterSpacing: "-5px",
  color: "rgba(0,0,255,0.6)"
};

const titleAfterMobile = {
  content: "Hello",
  position: "absolute",
  left: "6px",
  top: "5px",
  color: "rgba(255,0,0,0.6)"
};

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  title = (titleStyle, titleAfterStyle) => {
    return (
      <div>
        <h1 style={titleStyle}>
          Hello
          <span style={titleAfterStyle}>Hello</span>
        </h1>
        <br />
        <h1 style={titleStyle}>
          world!
          <span style={titleAfterStyle}>world!</span>
        </h1>
      </div>
    );
  };

  render() {
    return (
      <div className="Home ScreenContainer" style={container}>
        {/*<Spinner duration={5} /> */}
        <div>
          <Media query="(max-width: 599px)">
            {matches =>
              matches
                ? this.title(titleMobile, titleAfterMobile)
                : this.title(title, titleAfter)
            }
          </Media>
        </div>

        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <div style={textMobile}>
                I´m Marcos Bustamante,<br /> Software developer <br />Based in
                Seville
              </div>
            ) : (
              <div style={text}>
                I´m Marcos Bustamante,<br /> Software developer <br />Based in
                Seville
              </div>
            )
          }
        </Media>
      </div>
    );
  }
}

export default HomeScreen;
