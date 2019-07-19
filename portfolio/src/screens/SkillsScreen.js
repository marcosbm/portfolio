import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import SkillImage from "./../components/SkillImage";

const skillPaper = {
  maxWidth: "70%",
  marginLeft: "auto",
  marginRight: "auto",
  padding: 7,
  boxShadow: '0 5px 10px 0'
};

const skillTypeTitle = {
  backgroundColor: "rgb(34,141,255)",
  marginTop: 10
};

const skillTypeContent = {
  background: "linear-gradient(45deg, rgb(186,1,255), #2a0845)",
  marginBottom: 20,
  marginTop: 10
};

const dataSkills = [
  {
    title: "BACKEND",
    img: [
      {
        name: "spring",
        src: require("./../spring.png"),
        href: "https://spring.io/"
      },
      {
        name: "asp .net",
        src: require("./../dotnet.png"),
        href: "https://dotnet.microsoft.com/apps/aspnet"
      },
      {
        name: "node js",
        src: require("./../nodejs.png"),
        href: "https://nodejs.org"
      }
    ]
  },
  {
    title: "API ARCHITECTURE",
    img: [
      {
        name: "graphql",
        src: require("./../graphql.svg"),
        href: "https://graphql.org"
      }
    ]
  },
  {
    title: "FRONTEND",
    img: [
      {
        name: "react",
        src: require("./../react.svg"),
        href: "https://reactjs.org"
      },
      {
        name: "angular",
        src: require("./../angular.svg"),
        href: "https://angular.io"
      },
      {
        name: "redux",
        src: require("./../redux.png"),
        href: "https://redux.js.org/"
      }
    ]
  },
  {
    title: "CONTROL VERSION",
    img: [
      {
        name: "git",
        src: require("./../git.png"),
        href: "https://git-scm.com/"
      },
      {
        name: "subversion",
        src: require("./../svn.png"),
        href: "https://subversion.apache.org/"
      }
    ]
  },
  {
    title: "CROSS PLATAFORM MOBILE",
    img: [
      {
        name: "xamarin",
        src: require("./../xamarin.png"),
        href: "https://xamarin.com"
      },
      {
        name: "react native",
        src: require("./../react.svg"),
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

  render() {
    return (
      <div className="Skills ScreenContainer">

        {dataSkills.map(skill => (
          <div key={skill.title}>
            <Paper style={{ ...skillPaper, ...skillTypeTitle }}>
              <h3>{skill.title}</h3>
            </Paper>
            <Paper style={{ ...skillPaper, ...skillTypeContent }}>
              {skill.img.map(imgItem => (
                <SkillImage key={imgItem.name} name={imgItem.name} src={imgItem.src} href={imgItem.href} />
              ))}
            </Paper>
          </div>
        ))}
      </div>
    );
  }
}

export default SkillsScreen;
