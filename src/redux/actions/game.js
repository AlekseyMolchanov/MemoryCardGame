import { GAME_RESET, GAME_START } from "../const";

const resetGame = () => {
  return {
    type: GAME_RESET
  };
};

const startGame = () => {
  return {
    type: GAME_START
  };
};

export default { resetGame, startGame };
