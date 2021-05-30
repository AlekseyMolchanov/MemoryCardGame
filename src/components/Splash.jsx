import React from "react";
import { connect } from "react-redux";
import actions from "../redux/actions/game";
import { START_GAME_BTN_TITLE } from "../const";

class Splash extends React.Component {
  start_game = () => {
    this.props.startGame();
  };

  render() {
    let { caption, children, start } = this.props;
    if (start) return children;
    return (
      <div>
        <div className="start" onClick={this.start_game}>
          {caption}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  let { start } = state.game;
  console.log(props);
  return {
    caption: START_GAME_BTN_TITLE,
    start
  };
};

export default connect(mapStateToProps, actions)(Splash);
