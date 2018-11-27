import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "./Card";

class Cards extends Component {
  render() {
    const { cards } = this.props;
    return (
      <div>
        {cards.map(card => (
          <Card {...card} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.game.cards
  };
};

export default connect(mapStateToProps)(Cards);
