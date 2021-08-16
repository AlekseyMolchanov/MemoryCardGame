import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "./Card";
import actions from "../redux/actions/cards";

class Cards extends Component {
  constructor(props) {
    super(props);
    let { width, height, set, loadCards } = this.props;
    loadCards(width, height, set);
  }

  render() {
    const { cards } = this.props;

    return (
      <div className="cards">
        {cards.map(({ id, pare }) => (
          <Card id={id} pare={pare} key={id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.game.cards,
    set: state.game.set
  };
};

export default connect(mapStateToProps, actions)(Cards);
