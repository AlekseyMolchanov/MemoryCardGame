import React, { Component } from "react";
import { connect } from "react-redux";
import Cards from "../components/Cards";
import actions from "../redux/actions/game";
import { GAME_WIDTH, GAME_HEIGHT } from "../const";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.resetGame();
  }
  render() {
    return (
      <div className="app">
        <Cards width={GAME_WIDTH} height={GAME_HEIGHT} />
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
