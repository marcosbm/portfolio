import React, { Component } from "react";
import PersonalCard from "../components/PersonalCard";
import Grid from "@material-ui/core/Grid";
import { Slide } from "@material-ui/core";

const title = {
  fontFamily: "Permanent Marker, cursive"
};

class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data, slide } = this.props;

    return (
      <div>
        <Slide
          direction="left"
          in={slide}
          timeout={2000}
          mountOnEnter
          unmountOnExit
        >
          <h2 style={title}>Testimonials</h2>
        </Slide>
        <br />
        {data.map(item => (
          <Grid id="opinion" key={item.name} container spacing={0}>
            <Grid item xs={12}>
              <Slide
                direction="up"
                in={slide}
                timeout={2000}
                mountOnEnter
                unmountOnExit
              >
                <PersonalCard
                  src={item.src}
                  name={item.name}
                  text={item.textEnglish}
                  quote={true}
                />
              </Slide>
            </Grid>
          </Grid>
        ))}
      </div>
    );
  }
}

export default Testimonials;
