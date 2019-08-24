import React, { Component } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { Slide } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const titleStyle = {
  fontFamily: "Permanent Marker, cursive",
  marginBottom: 0
};

class TimeLine extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  breakLineText = text => {
    let newText = text.split("\n").map((item, i) => {
      return (
        <Typography variant="body2" color="textSecondary" component="p" key={i}>
          {item}
        </Typography>
      );
    });

    return newText;
  };

  render() {
    const { titleSection, data, slide } = this.props;

    return (
      <div>
        <Slide
          direction="left"
          in={slide}
          timeout={2000}
          mountOnEnter
          unmountOnExit
        >
          <h2 style={titleStyle}>{titleSection}</h2>
        </Slide>

        <Slide
          direction="up"
          in={slide}
          timeout={2000}
          mountOnEnter
          unmountOnExit
        >
          <Timeline className="timeline" lineColor={"#ddd"}>
            {data.map(item => (
              <TimelineItem
                key={item.text}
                dateText={item.date}
                style={{ color: "#e86971" }}
                bodyContainerStyle={{
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                }}
              >
                <h3>{item.title}</h3>
                <h6>{item.subtitle}</h6>
                {this.breakLineText(item.text)}
              </TimelineItem>
            ))}
          </Timeline>
        </Slide>
      </div>
    );
  }
}

export default TimeLine;
