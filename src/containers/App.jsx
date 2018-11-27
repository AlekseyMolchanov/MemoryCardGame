import React, { Component } from "react";

import Cards from "../components/Cards";

import store from "../store";
import { GAME_INIT } from "../const";

export default class App extends Component {
  componentDidMount() {
    const size = 5;
    const rnd = Math.random();
    const keys = [...Array(size).keys()];
    const cards = Array.prototype.concat(
      [],
      ...keys.map(key => {
        return [
          {
            title: key,
            key: `${key}_1`,
            img: `https://robohash.org/${rnd}${key}`
          },
          {
            title: key,
            key: `${key}_2`,
            img: `https://robohash.org/${rnd}${key}`
          }
        ];
      })
    );

    cards.map((card, order) => (card.order = order));

    store.dispatch({
      type: GAME_INIT,
      cards: cards
    });
  }
  render() {
    return (
      <div>
        <Cards />
      </div>
    );
  }
}
