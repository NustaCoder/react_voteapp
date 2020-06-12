import React, { Component } from "react";
import Main from "./components/MainComponent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: 10
    }
  }
  render() {
    return (
      <div>
        <Main val={this.state.val} />
      </div>
    );
  }
}

export default App;
