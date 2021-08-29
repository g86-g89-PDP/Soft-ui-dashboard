import { TOGGLE_PROFILE_BOTTOM, TOGGLE_PROFILE_TOP } from "./types";

export const toggleProfileTop = (dis, id) => {
  dis({ type: TOGGLE_PROFILE_TOP, payload: id });
};
export const toggleProfileBottom = (dis, id) => {
  dis({ type: TOGGLE_PROFILE_BOTTOM, payload: id });
};
