import { CARD_FLIP, GAME_INIT } from "../const";

const flipCard = id => {
  // console.log("flip", card);
  return {
    type: CARD_FLIP,
    id
  };
};

const setCards = cards => {
  return {
    type: GAME_INIT,
    cards: cards
  };
};

export default { flipCard, setCards };
