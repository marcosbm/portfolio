import React from "react";
import { Keyframes, animated } from "react-spring/renderprops";

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { radians: 0, color: "#247BA0" },
      to: { radians: 2 * Math.PI }
    });
  }
});

const title = {
  display: "inline",
  position: "relative",
  letterSpacing: "-5px",
  color: "rgba(0,0,255, 0.8)",
  marginTop: 10,
  top: 70,
  textShadow:
    "-1px 0 rgb(0, 0, 0), 0 1px rgb(0, 0, 0), 1px 0 rgb(0, 0, 0), 0 -1px rgb(0, 0, 0)"
};

const titleAfter = {
  content: "Hello",
  position: "absolute",
  top: "5px",
  color: "rgba(255,0,0, 0.8)"
};

class WelcomeWords extends React.PureComponent {
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

  render() {
    const { titleStyle, titleAfterStyle } = this.props;

    const Content = ({ radians, color }) => (
      <animated.div
        style={{
          willChange: "transform",
          transform: radians.interpolate(
            r => `translate3d(0, ${20 * Math.sin(r + Math.PI / 25)}px, 0)`
          )
        }}
      >
        {this.title(titleStyle, titleAfterStyle)}
      </animated.div>
    );
    return (
      <div>
        <Container reset native config={{ duration: 2500 }}>
          {Content}
        </Container>
      </div>
    );
  }
}

export default WelcomeWords;
