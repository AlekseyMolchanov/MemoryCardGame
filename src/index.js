import ReactDOM from "react-dom";
import React, { Component } from "react";
import Card from "./components/Card";
import "./styles.css";

class App extends Component {
  state = {
    last: null,
    cards: []
  };
  Flip() {
    alert(1);
  }
  cards() {}
  render() {
    return (
      <div className="App">
        <Card Flip={() => this.Flip()} title="123" />
        <Card Flip={() => this.Flip()} title="213" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
