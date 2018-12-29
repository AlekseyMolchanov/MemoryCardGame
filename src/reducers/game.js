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
        cards: state.cards.map(card => {
          let is_done =
            card.is_done ||
            (state.last &&
              (state.last.pare === action.card.pare &&
                (card.id === action.card.id || card.id === state.last.id)));

          let _card = {
            ...card,
            is_done: is_done,
            is_open:
              card.id === action.card.id ||
              // (state.last && card.id === state.last.id) || - add easy level
              is_done
          };

          return _card;
        })
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
