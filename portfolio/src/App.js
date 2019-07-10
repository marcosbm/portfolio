import React, { Component } from "react";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor() {
    super();

    this.state = { };
  }  

  componentDidMount () {

  }

  render() {


    return (
        <div className="App" styles={{ flexGrow: 1 }}>
            <Navbar></Navbar>
        </div>
    );
  }
}

export default App;
