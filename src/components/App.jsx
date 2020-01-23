import React, { Component } from "react";
import { connect } from "react-redux";

import actions from "../redux/actions/game";
import { GAME_WIDTH, GAME_HEIGHT } from "../const";

import Cards from "./Cards";
import Splash from "./Splash";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.resetGame();
  }
  render() {
    return (
      <div className="app">
        <Splash caption="Начать игру!">
          <Cards width={GAME_WIDTH} height={GAME_HEIGHT} />
        </Splash>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    start: state.game.start
  };
};

export default connect(
  mapStateToProps,
  actions
)(App);
