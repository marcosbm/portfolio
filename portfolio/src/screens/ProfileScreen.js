import React, { Component } from "react";
import PersonalCard from "../components/PersonalCard";
import Grid from "@material-ui/core/Grid";
import { Slide } from "@material-ui/core";

const dataTestimonials = [
  {
    src: require("./../images/fjr.jpg"),
    name: "Francisco Javier Ruano",
    text:
      "Marcos es una persona que siempre está investigando y buscando nuevas posibilidades para un proyecto, una garantía de estar siempre a la última tecnología. Muy trabajador cuando algo le apasiona. Gran compañero."
  },
  {
    src: require("./../images/mco.jpg"),
    name: "Manuel Camero Orellana",
    text:
      "Apasionado del aprendizaje y el trabajo bien hecho, un gran compañero 🖖."
  },
  {
    src: require("./../images/asc.jpg"),
    name: "Alvaro Sanchez Cabrera",
    text: "Gran profesional, buen compañero y apasionado de las tecnologías."
  }
];

let intervalId = 0;

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      slide: false
    };
  }

  handleTimer = () => {
    this.setState({ seconds: this.state.seconds + 1, slide: true });
  };

  componentDidMount() {
    document.title = "MBM - Profile";
    intervalId = setInterval(() => this.handleTimer(), 1000);
  }

  componentWillUnmount() {
    clearInterval(intervalId);
  }

  render() {
    const { slide } = this.state;

    return (
      <div className="Profile ScreenContainer">
        <Slide
          direction="down"
          in={slide}
          timeout={2000}
          mountOnEnter
          unmountOnExit
        >
          <PersonalCard
            src={require("./../images/photo.png")}
            name={"Marcos Bustamante Mateo"}
            text={
              "I am Software developer with a great focus on creating clean & user friendly code."
            }
          />
        </Slide>

        <Slide
          direction="left"
          in={slide}
          timeout={2000}
          mountOnEnter
          unmountOnExit
        >
          <h2>Testimonials</h2>
        </Slide>
        {dataTestimonials.map(item => (
          <Grid key={item.name} container spacing={8}>
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
                  text={item.text}
                />
              </Slide>
            </Grid>
          </Grid>
        ))}
      </div>
    );
  }
}

export default ProfileScreen;
