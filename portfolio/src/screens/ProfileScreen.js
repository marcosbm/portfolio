import React, { Component } from "react";
import PersonalCard from "../components/PersonalCard";
import { Slide } from "@material-ui/core";
import Testimonials from "../components/Testimonials";
import TimeLine from "../components/TimeLine";


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

const dataExperience = [
  {
    title: 'Fujitsu',
    subtitle: 'Full-Stack developer',
    text: 'During this time I was developing on Spring boot, Spring data, Spring Rest, JPA, Hibernate, QueryDSL and JUnit for Backend and  React, Redux, CSS3 and HTML5 for Frontend. ',
    date: '01/2019 – 06/2019'
  },
  {
    title: 'Workana',
    subtitle: 'Freelance developer',
    text: 'Development and maintenance of any software customer request',
    date: '09/2018 – 12/2018'
  },
  {
    title: 'Grupo Oesia',
    subtitle: 'Java developer',
    text: 'Working on framework based in Java with technologies like Java EE, Java SWT, Spring Boot, JUnit, Mockito, Docker and ImDB (db2)',
    date: '04/2018 – 06/2018'
  }
];

const dataEducation = [
    {
      title: 'Everis Center Seville',
      subtitle: 'Boot Camp Angular',
      text: 'Learning and practise about Angular during one week',
      date: '10/2018'
    },
    {
      title: 'Everis Center Seville',
      subtitle: 'Boot Camp .NET',
      text: 'Learning and practise about .NET enviroment with C# during two weeks. Working with technologies like SQL Server, ADO.NET, Entity Framework, Linq and ASP.NET',
      date: '07/2018'
    },
    {
      title: 'Altair Education Center',
      subtitle: 'Application vocational trainning',
      text: '• Programming on Java, Node.js, Angular & .NET \n• Databases adminstration for SQL (Oracle, MySQL, SQLServer) & NoSQL (MongoDB) \n• Mobile apps development on Android Studio \n• Linux systems & local networks administration',
      date: '09/2016 - 04/2018'
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
        // console.log('SCROLL');
      } else {
        // console.log('NO SCROLL');
      }
    }
  };

  componentDidMount() {
    document.title = "MBM - Profile";
    intervalId = setInterval(() => this.handleTimer(), 1000);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    clearInterval(intervalId);
  }

  render() {
    const { slide } = this.state;

    return (
      <div
        style={{ overflow: "hidden" }}
        className="Profile ScreenContainer"
        onScroll={this.handleScroll}
      >
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
              "I am Software developer with a great focus on creating clean & user friendly code. \n\nI consider myself as a very passionate person of technologies. I always try to learn something new. I think this is because I do not code just for money or work, especially I do it for hobby because I love it. \n\nI can develop both frontend and backend using BFF, microservices or GraphQL. Now I am delving into Java development with Spring and Javascript with React and Angular. I am learning languages ​​like PHP and Python with frameworks like Laravel, Wordpress and Django. \nI am also preparing for the Oracle OCA Java 8 certification"
            }
          />
        </Slide>

        <TimeLine titleSection={'Experience'} data={dataExperience} slide={slide} />
        <TimeLine titleSection={'Education'} data={dataEducation} slide={slide} />
        <Testimonials data={dataTestimonials} slide={slide} />

        <br />
        <br />
      </div>
    );
  }
}

export default ProfileScreen;
