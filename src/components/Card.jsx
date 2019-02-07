import React, { Component } from "react";
import { connect } from "react-redux";
import { cardStyle } from "../assets/styles";
import actions from "../redux/actions/cards";

class Card extends Component {
  handleflip = event => {
    if (!this.props.is_open)
      this.props.flipCard({
        id: this.props.id,
        pare: this.props.pare
      });
  };
  render() {
    const { order, width, height } = this.props;
    const style = cardStyle(order, width, height);
    return (
      <div className={this.props.cls} style={style} onClick={this.handleflip}>
        <img src={this.props.src} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let found = state.game.cards.filter(card => card.id === props.id);
  let card = found[0];

  const stack = [
    "card",
    card.is_open ? "is_open" : "is_close",
    card.is_done ? "is_done" : "",
    state.game.last && state.game.last.id === card.id ? "last" : ""
  ];

  return {
    cls: stack.join(" "),
    is_open: card.is_open,
    order: card.order,
    width: card.width,
    height: card.height,
    src: card.src
  };
};

export default connect(
  mapStateToProps,
  actions
)(Card);
