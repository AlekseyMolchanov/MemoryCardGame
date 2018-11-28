import { GAME_RESET } from "../const";

const resetGame = () => {
  return {
    type: GAME_RESET
  };
};

export default { resetGame };
