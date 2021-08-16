import React from "react";
import { connect } from "react-redux";
import { START_GAME_BTN_TITLE_SET0, START_GAME_BTN_TITLE_SET4 } from "../const";
import Buttion from "./Buttion";

class Splash extends React.Component {
  render() {
    let { cats_caption, robots_caption } = this.props;
    return (
      <div className="menu">
        <Buttion caption={cats_caption} set="set4" />
        <Buttion caption={robots_caption} set="set0" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cats_caption: START_GAME_BTN_TITLE_SET4,
    robots_caption: START_GAME_BTN_TITLE_SET0
  };
};

export default connect(mapStateToProps)(Splash);
