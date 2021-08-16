import { GAME_RESET, GAME_START } from "../const";

const resetGame = () => {
  return {
    type: GAME_RESET
  };
};

const startGame = (set) => {
  return {
    type: GAME_START,
    set
  };
};

export default { resetGame, startGame };
