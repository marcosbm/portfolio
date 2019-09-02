import React, { Component } from "react";
import SkillImage from "./../components/SkillImage";
import Media from "react-media";
import { withTranslation } from 'react-i18next';

const skillPaper = {
  maxWidth: "70%",
  marginLeft: "auto",
  marginRight: "auto",
  padding: 7,
  boxShadow: "0 5px 10px 0",
  borderRadius: 5
};

const skillPaperMobile = {
  maxWidth: "70%"
};

const skillPaperPc = {
  maxWidth: "50%"
};

const skillTypeTitle = {
  background: "linear-gradient(45deg, #000000, #434343)",
  marginTop: 10,
  color: "rgb(238, 237, 237)"
};

const skillTypeContent = {
  background: "linear-gradient(45deg, rgb(186,1,255), #2a0845)",
  marginBottom: 20,
  marginTop: 10
};

const skillName = {
  fontFamily: 'Walter Turncoat, cursive'
};

const dataSkills = [
  {
    title: "skills.backend",
    img: [
      {
        name: "spring",
        src: require("./../images/spring.png"),
        href: "https://spring.io/"
      },
      {
        name: "asp .net",
        src: require("./../images/dotnet.png"),
        href: "https://dotnet.microsoft.com/apps/aspnet"
      },
      {
        name: "node js",
        src: require("./../images/nodejs.png"),
        href: "https://nodejs.org"
      }
    ]
  },
  {
    title: "skills.apiArc",
    img: [
      {
        name: "graphql",
        src: require("./../images/graphql.svg"),
        href: "https://graphql.org"
      }
    ]
  },
  {
    title: "skills.frontend",
    img: [
      {
        name: "react",
        src: require("./../images/react.svg"),
        href: "https://reactjs.org"
      },
      {
        name: "angular",
        src: require("./../images/angular.svg"),
        href: "https://angular.io"
      },
      {
        name: "redux",
        src: require("./../images/redux.png"),
        href: "https://redux.js.org/"
      }
    ]
  },
  {
    title: "skills.versionControl",
    img: [
      {
        name: "git",
        src: require("./../images/git.png"),
        href: "https://git-scm.com/"
      },
      {
        name: "subversion",
        src: require("./../images/svn.png"),
        href: "https://subversion.apache.org/"
      }
    ]
  },
  {
    title: "skills.mobile",
    img: [
      {
        name: "xamarin",
        src: require("./../images/xamarin.png"),
        href: "https://xamarin.com"
      },
      {
        name: "react native",
        src: require("./../images/react.svg"),
        href: "https://facebook.github.io/react-native/"
      }
    ]
  }
];

class SkillsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  skills = (skillPaperStyle, skillPaperDevice, slide) => {
    return (
      <div className="Skills ScreenContainer">
        {dataSkills.map(skill => (
          <div key={skill.title}>
            <div
              style={{
                ...skillPaperStyle,
                ...skillPaperDevice,
                ...skillTypeTitle
              }}
            >
              <h3 style={skillName}>{this.props.t(skill.title)}</h3>
            </div>

            <div
              style={{
                ...skillPaperStyle,
                ...skillPaperDevice,
                ...skillTypeContent
              }}
            >
              {skill.img.map(imgItem => (
                <SkillImage
                  key={imgItem.name}
                  name={imgItem.name}
                  src={imgItem.src}
                  href={imgItem.href}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  componentDidMount() {
    document.title = "MBM - Skills";
  }

  render() {
    const { slide } = this.state;

    return (
      <Media query="(max-width: 1025px)">
        {matches =>
          matches
            ? this.skills(skillPaper, skillPaperMobile, slide)
            : this.skills(skillPaper, skillPaperPc, slide)
        }
      </Media>
    );
  }
}

export default withTranslation('common')(SkillsScreen);
