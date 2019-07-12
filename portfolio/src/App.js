import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SharedFloatButton from './components/SharedFloatButton';
import ErrorHandler from "./components/ErrorHandler";

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
          <ErrorHandler>
            <Navbar></Navbar>
            <SharedFloatButton></SharedFloatButton>
          </ErrorHandler>
        </div>
    );
  }
}

export default App;
