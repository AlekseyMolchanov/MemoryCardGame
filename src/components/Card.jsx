import React, { Component } from "react";
import { connect } from "react-redux";
import { cardStyle } from "../assets/styles";
import * as actions from "../actions/cards";

class Card extends Component {
  handleflip = event => {
    this.props.flip(this.props.key);
  };
  render() {
    const style = cardStyle(this.props);
    return <div style={style} onClick={this.handleflip} />;
  }
}

export default connect(
  null,
  {
    ...actions
  }
)(Card);
