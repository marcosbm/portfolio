import React, { Component } from "react";
import PersonalCard from "../components/PersonalCard";
import Grid from "@material-ui/core/Grid";

const dataTestimonials = [
  {
    src: require("./../fjr.jpg"),
    name: "Francisco Javier Ruano",
    text:
      "Marcos es una persona que siempre está investigando y buscando nuevas posibilidades para un proyecto, una garantía de estar siempre a la última tecnología. Muy trabajador cuando algo le apasiona. Gran compañero."
  },
  {
    src: require("./../mco.jpg"),
    name: "Manuel Camero Orellana",
    text:
      "Apasionado del aprendizaje y el trabajo bien hecho, un gran compañero 🖖."
  },
  {
    src: require("./../asc.jpg"),
    name: "Alvaro Sanchez Cabrera",
    text: "Gran profesional, buen compañero y apasionado de las tecnologías."
  }
];

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0
    };
  }

  handleTimer = () => {
    this.setState({ seconds: this.state.seconds + 1 });
  };

  componentDidMount() {
    document.title = "MBM - Profile";
    setInterval(() => this.handleTimer(), 1000);
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="Profile ScreenContainer">
        <PersonalCard
          src={require("./../photo.png")}
          name={"Marcos Bustamante Mateo"}
          text={
            "I am Software developer with a great focus on creating clean & user friendly code."
          }
        />

        <h2>Testimonials</h2>
        {dataTestimonials.map(item => (
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <PersonalCard src={item.src} name={item.name} text={item.text} />
            </Grid>
          </Grid>
        ))}
      </div>
    );
  }
}

export default ProfileScreen;
