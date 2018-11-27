import { CARD_FLIP } from "../const";

const flip = card => {
  // console.log("flip", card);
  return {
    type: CARD_FLIP,
    card
  };
};

export { flip };
