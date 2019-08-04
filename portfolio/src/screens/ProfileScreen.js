import React, { Component } from "react";
import PersonalCard from "../components/PersonalCard";
import Grid from "@material-ui/core/Grid";
import { Slide } from "@material-ui/core";

const dataTestimonials = [
  {
    src: require("./../images/fjr.jpg"),
    name: "Francisco Javier Ruano",
    text:
      "Marcos es una persona que siempre está investigando y buscando nuevas posibilidades para un proyecto, una garantía de estar siempre a la última tecnología. Muy trabajador cuando algo le apasiona. Gran compañero.",
    textEnglish:
      "Marcos is a person who is always researching and looking for new possibilities for a project, a guarantee of always being up to date with the latest technology. Very hardworking when he is passionate about something. Great partner."
  },
  {
    src: require("./../images/mco.jpg"),
    name: "Manuel Camero Orellana",
    text:
      "Apasionado del aprendizaje y el trabajo bien hecho, un gran compañero.",
    textEnglish:
      "Passionate about learning and a job well done, a great partner."
  },
  {
    src: require("./../images/asc.jpg"),
    name: "Alvaro Sanchez Cabrera",
    text: "Gran profesional, buen compañero y apasionado de las tecnologías.",
    textEnglish:
      "Great professional, good partner and passionate about technologies."
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

  handleScroll = () => {
    const opinionContainer = document.getElementById("opinion");

    if (opinionContainer !== null) {
      if (window.pageYOffset > opinionContainer.offsetTop) {
        console.log('SCROLL');
      } else {
        console.log('NO SCROLL');
      }
    }
  }

  componentDidMount() {
    document.title = "MBM - Profile";
    intervalId = setInterval(() => this.handleTimer(), 1000);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    clearInterval(intervalId);
  }

  render() {
    const { slide } = this.state;

    return (
      <div style={{ overflow: 'hidden' }} className="Profile ScreenContainer" onScroll={this.handleScroll}>
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
          <h2 style={{fontFamily: 'Permanent Marker, cursive'}}>Testimonials</h2>
        </Slide>
        {dataTestimonials.map(item => (
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
        <br /><br />
      </div>
    );
  }
}

export default ProfileScreen;
