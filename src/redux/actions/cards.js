import { CARD_FLIP, GAME_INIT } from "../const";

const flipCard = (card) => {
  return {
    type: CARD_FLIP,
    card
  };
};

const setCards = (cards) => {
  return {
    type: GAME_INIT,
    cards: cards
  };
};

const loadCards = (width, height, set) => {
  const rnd = Math.random();
  const size = (width * height) / 2;
  const keys = [...Array(Math.floor(size)).keys()];
  const cards = Array.prototype.concat(
    [],
    ...keys.map((key) => {
      return [
        {
          id: `${key}_1`,
          pare: key,
          src: `https://robohash.org/${rnd}${key}?set=${set}`
        },
        {
          id: `${key}_2`,
          pare: key,
          src: `https://robohash.org/${rnd}${key}?set=${set}`
        }
      ];
    })
  );

  cards.sort(() => Math.random() - 0.5);
  cards.map((card, order) => (card.order = order));
  cards.map((card, order) => (card.is_open = false));
  cards.map((card, order) => (card.width = 100 / width));
  cards.map((card, order) => (card.height = 100 / height));

  return {
    type: GAME_INIT,
    cards: cards
  };
};

export default {
  flipCard,
  setCards,
  loadCards
};
