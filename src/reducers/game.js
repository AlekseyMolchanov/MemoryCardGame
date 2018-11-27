import {
  INITIAL_STATE,
  CARD_FLIP,
  GAME_START,
  GAME_STOP,
  GAME_INIT
} from "../const";

const game = (state = INITIAL_STATE, action) => {
  // console.log('game', action);
  switch (action.type) {
    case GAME_INIT: {
      return {
        ...state,
        cards: action.cards
      };
    }
    case CARD_FLIP: {
      return {
        ...state
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
    default:
      return state;
  }
};

export default game;
