import { GAME_RESET } from "../const";

const reset = () => {
  return {
    type: GAME_RESET
  };
};

export default { reset };
