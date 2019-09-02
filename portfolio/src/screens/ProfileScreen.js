import React, { Component } from "react";
import PersonalCard from "../components/PersonalCard";
import { Slide } from "@material-ui/core";
import Testimonials from "../components/Testimonials";
import TimeLine from "../components/TimeLine";
import { withTranslation } from 'react-i18next';

const dataTestimonials = [
  {
    src: require("./../images/fjr.jpg"),
    name: "Francisco Javier Ruano",
    keyText: "profile.testimonials.fjr"
  },
  {
    src: require("./../images/mco.jpg"),
    name: "Manuel Camero Orellana",
    keyText: "profile.testimonials.mco"
  },
  {
    src: require("./../images/asc.jpg"),
    name: "Alvaro Sanchez Cabrera",
    keyText: "profile.testimonials.asc"
  }
];

const dataExperience = [
  {
    title: 'profile.experience.fujitsu.title',
    subtitleKey: 'profile.experience.fujitsu.subtitle',
    textKey: 'profile.experience.fujitsu.text',
    date: '01/2019 – 06/2019'
  },
  {
    title: 'profile.experience.workana.title',
    subtitleKey: 'profile.experience.workana.subtitle',
    textKey: 'profile.experience.workana.text',
    date: '09/2018 – 12/2018'
  },
  {
    title: 'profile.experience.oesia.title',
    subtitleKey: 'profile.experience.oesia.subtitle',
    textKey: 'profile.experience.oesia.text',
    date: '04/2018 – 06/2018'
  }
];

const dataEducation = [
    {
      title: 'profile.education.everisOne.title',
      subtitleKey: 'profile.education.everisOne.subtitle',
      textKey: 'profile.education.everisOne.text',
      date: '10/2018'
    },
    {
      title: 'profile.education.everisTwo.title',
      subtitleKey: 'profile.education.everisTwo.subtitle',
      textKey: 'profile.education.everisTwo.text',
      date: '07/2018'
    },
    {
      title: 'profile.education.altair.title',
      subtitleKey: 'profile.education.altair.subtitle',
      textKey: 'profile.education.altair.text',
      date: '09/2016 - 04/2018'
    }
];

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
    this.interval = setInterval(() => this.handleTimer(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
            text={this.props.t('profile.description')}
          />
        </Slide>

        <TimeLine titleSection={this.props.t('profile.experience.title')} data={dataExperience} slide={slide} />
        <TimeLine titleSection={this.props.t('profile.education.title')} data={dataEducation} slide={slide} />
        <Testimonials data={dataTestimonials} slide={slide} />

        <br />
        <br />
      </div>
    );
  }
}

export default withTranslation('common')(ProfileScreen);
