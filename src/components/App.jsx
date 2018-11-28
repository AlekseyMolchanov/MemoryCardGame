import React, { Component } from "react";
import { connect } from "react-redux";
import Cards from "../components/Cards";
import actions from "../actions/game";
import { GAME_WIDTH, GAME_HEIGHT, GAME_RND } from "../const";

class App extends Component {
  componentWillMount() {
    this.props.resetGame();
  }
  render() {
    return (
      <div className="app">
        <Cards width={GAME_WIDTH} height={GAME_HEIGHT} rnd={GAME_RND} />
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
  {
    ...actions
  }
)(App);
