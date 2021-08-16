import React from "react";
import { connect } from "react-redux";
import actions from "../redux/actions/game";
class Buttion extends React.Component {
  on_click = () => {
    this.props.startGame(this.props.set);
  };

  render() {
    let { caption } = this.props;
    // console.log(this.props);
    return (
      <div className="start" onClick={this.on_click}>
        {caption}
      </div>
    );
  }
}

export default connect(null, actions)(Buttion);
