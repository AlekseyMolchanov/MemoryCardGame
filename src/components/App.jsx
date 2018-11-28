import React, { Component } from "react";

import Cards from "../components/Cards";

import { GAME_WIDTH, GAME_HEIGHT, GAME_RND } from "../const";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Cards width={GAME_WIDTH} height={GAME_HEIGHT} rnd={GAME_RND} />
      </div>
    );
  }
}
