import React, { Component } from "react";
import Navbar from "./components/Navbar";
import FloatButtons from './components/FloatButtons';

class App extends Component {
  constructor() {
    super();

    this.state = { };
  }  

  componentDidMount () {

  }

  render() {


    return (
        <div className="App">
            <Navbar style={{overflowX: 'hidden'}}></Navbar>
            <FloatButtons></FloatButtons>
        </div>
    );
  }
}

export default App;
