import React, { Component } from "react";

const pdf = require("./../cv.pdf");
const download = require("./../images/download.png");

const pdfStyle = {
  marginTop: 80,
  position: "fixed"
};

const textStyle = {
  marginTop: 75,
  textAlign: "center"
};

const linkStyle = {
  textDecoration: "none"
};

const imageStyle = {
  width: 100
};

class CvScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <object
          data={pdf + "#page=1&toolbar=0&view=FitH&scrollbar=0&navpanes=0"}
          type="application/pdf"
          width="100%"
          height={window.screen.availHeight - 160}
          style={pdfStyle}
        >
          <object
            data={"https://drive.google.com/viewerng/viewer?embedded=true&url=marcosbustamantemateo.com/static/media/cv.303cc9ef.pdf"}
            type="text/html"
            width="100%"
            height={window.screen.availHeight - 90}
          >
            <p style={textStyle}>
              This browser does not support PDFs. <br />
              <a href={pdf} style={linkStyle} download>
                Download it
                <br />
                <img src={download} alt="download logo" style={imageStyle} />
              </a>
              <br /><br />
            </p>
          </object>
        </object>
      </div>
    );
  }
}

export default CvScreen;
