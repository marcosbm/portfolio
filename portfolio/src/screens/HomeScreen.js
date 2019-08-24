import React, { Component } from "react";
import Media from "react-media";
import backgroundHome from "./../images/backgroundHome.jpg";
import WelcomeWords from "../components/WelcomeWords";

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
  padding: 10,
  backgroundColor: "rgb(175, 175, 175, 0.7)",
  position: "relative",
  top: 140
};

const textPc = {
  font: "30px Permanent Marker, cursive",
  marginLeft: "30%"
};

const textMobile = {
  font: "20px Permanent Marker, cursive",
  marginLeft: 30
};

const titlePc = {
  font: "200px Lacquer, sans-serif"
};

const titleMobile = {
  font: "110px Lacquer, sans-serif"
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
                ? <WelcomeWords titleStyle={titleMobile}  titleAfterStyle={titleAfterMobile} />
                : <WelcomeWords titleStyle={titlePc}  titleAfterStyle={titleAfterPc} />
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
