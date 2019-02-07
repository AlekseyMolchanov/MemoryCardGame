import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "./Card";
import actions from "../redux/actions/cards";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.props.loadCards(this.props.width, this.props.height);
  }

  render() {
    const { cards } = this.props;
    return (
      <div className="cards">
        {cards.map(card => (
          <Card id={card.id} pare={card.pare} key={card.id} />
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

export default connect(
  mapStateToProps,
  actions
)(Cards);
