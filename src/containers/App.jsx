import React, { Component } from "react";

import Cards from "../components/Cards";

import store from "../store";
import { GAME_INIT, GAME_SIZE, GAME_RND } from "../const";

export default class App extends Component {
  componentDidMount() {
    const keys = [...Array(GAME_SIZE).keys()];
    const cards = Array.prototype.concat(
      [],
      ...keys.map(key => {
        return [
          {
            key: `${key}_1`,
            img: `https://robohash.org/${GAME_RND}${key}`
          },
          {
            key: `${key}_2`,
            img: `https://robohash.org/${GAME_RND}${key}`
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
