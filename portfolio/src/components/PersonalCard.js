import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import QuoteIcon from "@material-ui/icons/FormatQuoteSharp";
import Media from "react-media";
import { withTranslation } from 'react-i18next';

const container = {
  display: "inline-block",
  margin: 10
};

const card = {
  maxWidth: 500,
  maxHeight: 800,
  borderRadius: "15px"
};

const sizeMobile = {
  minWidth: 0
};

const sizePc = {
  minWidth: 500
};

const imgStyle = {
  maxHeight: 170,
  borderRadius: "100%",
  marginTop: 10
};

const nameStyle = {
  fontFamily: "Walter Turncoat, cursive"
};

class PersonalCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  breakLineText = text => {
    let newText = text.split("\n").map((item, i) => {
      return (
        <span style={{textAlign: 'left'}} key={i}>
          {item}
          <br />
        </span>
      );
    });

    return newText;
  };

  card = style => {
    const { src, name, text, quote } = this.props;

    return (
      <Card raised={true} style={{ ...card, ...style }}>
        <CardActionArea>
          <img src={src} alt="marcos bustamante mateo logo" style={imgStyle} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={nameStyle}
            >
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {quote ? <QuoteIcon /> : null}
              {quote ? <i>{text}</i> : this.breakLineText(text)}
              {quote ? <QuoteIcon /> : null}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  render() {
    return (
      <div style={container}>
        <Media query="(max-width: 599px)">
          {matches => (matches ? this.card(sizeMobile) : this.card(sizePc))}
        </Media>
      </div>
    );
  }
}

export default withTranslation('common')(PersonalCard);
