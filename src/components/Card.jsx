import React, { Component } from "react";
import { connect } from "react-redux";
import { cardStyle } from "../assets/styles";
import actions from "../actions/cards";

class Card extends Component {
  handleflip = event => {
    this.props.flipCard(this.props.key);
  };
  render() {
    const style = cardStyle(this.props);
    return (
      <div style={style} onClick={this.handleflip}>
        {this.props.title}
      </div>
    );
  }
}

export default connect(
  null,
  {
    ...actions
  }
)(Card);
