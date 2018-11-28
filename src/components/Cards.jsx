import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "./Card";
import actions from "../actions/cards";

class Cards extends Component {
  componentDidMount() {
    const keys = [...Array(this.props.size).keys()];
    const cards = Array.prototype.concat(
      [],
      ...keys.map(key => {
        return [
          {
            key: `${key}_1`,
            title: `${key}_1`,
            img: `https://robohash.org/${this.props.rnd}${key}`
          },
          {
            key: `${key}_2`,
            title: `${key}_2`,
            img: `https://robohash.org/${this.props.rnd}${key}`
          }
        ];
      })
    );

    cards
      .map((card, order) => (card.order = order))
      .sort(() => Math.random() - 0.5);

    this.props.setCards(cards);
  }

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

export default connect(
  mapStateToProps,
  {
    ...actions
  }
)(Cards);
