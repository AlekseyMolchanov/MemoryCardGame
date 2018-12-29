import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "./Card";
import actions from "../actions/cards";

class Cards extends Component {
  componentDidMount() {
    const size = (this.props.width * this.props.height) / 2;
    const keys = [...Array(Math.floor(size)).keys()];
    const cards = Array.prototype.concat(
      [],
      ...keys.map(key => {
        return [
          {
            id: `${key}_1`,
            pare: key,
            src: `https://robohash.org/${this.props.rnd}${key}`
          },
          {
            id: `${key}_2`,
            pare: key,
            src: `https://robohash.org/${this.props.rnd}${key}`
          }
        ];
      })
    );

    cards.sort(() => Math.random() - 0.5);
    cards.map((card, order) => (card.order = order));
    cards.map((card, order) => (card.is_open = false));
    cards.map((card, order) => (card.width = 100 / this.props.width));
    cards.map((card, order) => (card.height = 100 / this.props.height));

    this.props.setCards(cards);
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
  {
    ...actions
  }
)(Cards);
