import React, { Component } from "react";

import Cards from "../components/Cards";

import { GAME_SIZE, GAME_RND } from "../const";

export default class App extends Component {
  render() {
    return (
      <div>
        <Cards size={GAME_SIZE} rnd={GAME_RND} />
      </div>
    );
  }
}
