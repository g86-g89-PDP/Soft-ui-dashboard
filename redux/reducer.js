import initialState from "./initialState";
import { TOGGLE_PROFILE_BOTTOM, TOGGLE_PROFILE_TOP } from "./types";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_PROFILE_TOP:
      let newTop = [...state.pcltop];
      newTop[payload].active = !newTop[payload].active;
      return { ...state, pcltop: newTop };
    case TOGGLE_PROFILE_BOTTOM:
      let newBottom = [...state.pclbottom];
      newBottom[payload].active = !newBottom[payload].active;
      return { ...state, pclbottom: newBottom };
    default:
      return state;
  }
};
