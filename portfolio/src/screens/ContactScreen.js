import React, { Component } from "react";
import Media from "react-media";
import ContactCard from "./../components/ContactCard";

const paperPc = {
  maxWidth: "30%"
};

const paperMobile = {
  maxWidth: "80%"
};

const data = [
  {
    title: "whatsapp",
    content: "+34 634 454 350",
    src: require("./../whatsapp.png"),
    href: "https://api.whatsapp.com/send?phone=34634454350"
  },
  {
    title: "gmail",
    content: "marcosbustamantemateo@gmail.com",
    src: require("./../gmail.png"),
    href: "mailto:marcosbustamantemateo@gmail.com"
  },
  {
    title: "linkedin",
    content: "All about my work experience",
    src: require("./../linkedin.png"),
    href: "https://www.linkedin.com/in/marcos-bustamante/"
  }
];

class ContactScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    document.title = "MBM - Contact";
  }

  render() {
    return (
      <div className="Home ScreenContainer">
        {data.map(item => (
          <Media query="(max-width: 1025px)" key={item.title}>
            {matches =>
              matches ? (
                <ContactCard
                  title={item.title}
                  src={item.src}
                  content={item.content}
                  href={item.href}
                  paperStyle={paperMobile}
                />
              ) : (
                <ContactCard
                  title={item.title}
                  src={item.src}
                  content={item.content}
                  href={item.href}
                  paperStyle={paperPc}
                />
              )
            }
          </Media>
        ))}

        <br />
      </div>
    );
  }
}

export default ContactScreen;
