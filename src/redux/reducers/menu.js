import { TOGGLE_MENU } from "../constants/action-types";

const initialState = {
  open: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        open: !state.open
      };
    default:
      return state;
  }
}
