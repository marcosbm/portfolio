import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import SkillImage from "./../components/SkillImage";

const skillTypeTitle = {
  backgroundColor: "#01CBC6",
  maxWidth: "60%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 10,
  padding: 5,
  border: "2px solid black"
};

const skillTypeContent = {
  background: "linear-gradient(45deg, #6441A5, #2a0845)",
  maxWidth: "60%",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: 20,
  marginTop: 5,
  padding: 5,
  border: "2px solid black"
};

const data = [
  {
    title: "BACKEND",
    img: [
      {
        name: "spring",
        src: require("./../spring.png")
      },
      {
        name: "asp .net",
        src: require("./../dotnet.png")
      },
      {
        name: "node js",
        src: require("./../nodejs.png")
      }
    ]
  },
  {
    title: "FRONTEND",
    img: [
      {
        name: "react",
        src: require("./../react.svg")
      },
      {
        name: "angular",
        src: require("./../angular.svg")
      },
      {
        name: "apollo",
        src: require("./../apollo.png")
      },
      {
        name: "redux",
        src: require("./../redux.png")
      }
    ]
  },
  {
    title: "API ARCHITECTURE",
    img: [
      {
        name: "graphql",
        src: require("./../graphql.svg")
      }
    ]
  },
  {
    title: "CONTROL VERSION",
    img: [
      {
        name: "git",
        src: require("./../git.png")
      },
      {
        name: "subversion",
        src: require("./../svn.png")
      }
    ]
  },
  {
    title: "DEPLOYMENT",
    img: [
      {
        name: "docker",
        src: require("./../docker.png")
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
        <h1>Skills</h1>

        {data.map(item => (
          <div>
            <Paper style={skillTypeTitle}>
              <h3>{item.title}</h3>
            </Paper>
            <Paper style={skillTypeContent}>
              {item.img.map(imgItem => (
                <SkillImage name={imgItem.name} src={imgItem.src} />
              ))}
            </Paper>
          </div>
        ))}
      </div>
    );
  }
}

export default SkillsScreen;
