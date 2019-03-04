import React from "react";
import { connect } from "react-redux";
import actions from "../redux/actions/game";

class Splash extends React.Component {
  start_game = () => {
    this.props.startGame();
  };

  render() {
    if (this.props.start) return this.props.children;
    return (
      <div>
        <div className="start" onClick={this.start_game}>
          Начать игру
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  let { start } = state.game;

  return {
    start
  };
};

export default connect(
  mapStateToProps,
  actions
)(Splash);
