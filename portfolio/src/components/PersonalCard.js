import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const container = { 
    display: "inline-block",
    margin: 10 
};

const card = { 
    maxWidth: 500, 
    maxHeight: 800, 
    borderRadius: "15px"
 };

const img = { 
    maxHeight: 170, 
    borderRadius: "100%", 
    marginTop: 10 
};

const text = {
    textIndent: "1em"
};

class PersonalCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div style={container}>
        <Card
          raised={true}
          style={card}
        >
          <CardActionArea>
            <img
              src={require("./../photo.png")}
              alt="marcos bustamante mateo logo"
              style={img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Marcos Bustamante Mateo
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={text}
              >
                I am Software developer with a great focus on
                creating clean & user friendly code.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default PersonalCard;
