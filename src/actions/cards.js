import { CARD_FLIP, GAME_INIT } from "../const";

const flipCard = card => {
  console.log("flip", card);
  return {
    type: CARD_FLIP,
    card
  };
};

const setCards = cards => {
  return {
    type: GAME_INIT,
    cards: cards
  };
};

export default { flipCard, setCards };
