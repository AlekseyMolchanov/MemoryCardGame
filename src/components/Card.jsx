import React, { Component } from "react";
import { connect } from "react-redux";
import { cardStyle } from "../assets/styles";
import actions from "../actions/cards";

class Card extends Component {
  handleflip = event => {
    this.props.flipCard(this.props.id);
  };
  render() {
    const style = cardStyle(this.props);
    const cls = "card " + (!!this.props.is_open ? "is_open" : "is_close");
    return (
      <div style={style} className={cls} onClick={this.handleflip}>
        <img src={this.props.src} />
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
