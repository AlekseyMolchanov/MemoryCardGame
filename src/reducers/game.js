import {
  INITIAL_STATE,
  CARD_FLIP,
  GAME_START,
  GAME_STOP,
  GAME_INIT,
  GAME_RESET
} from "../const";

const game = (state = INITIAL_STATE, action) => {
  console.log("game action", action);
  switch (action.type) {
    case GAME_INIT: {
      return {
        ...state,
        cards: action.cards
      };
    }
    case CARD_FLIP: {
      return {
        ...state,
        last: action.card,
        cards: state.cards.map(card =>
          card.id === action.card.id
            ? { ...card, is_open: !card.is_open }
            : card
        )
      };
    }
    case GAME_STOP: {
      return {
        ...state,
        start: false
      };
    }
    case GAME_START: {
      return {
        ...state,
        start: true
      };
    }
    case GAME_RESET: {
      return {
        ...state,
        last: null,
        cards: [],
        start: false
      };
    }

    default:
      return state;
  }
};

export default game;
