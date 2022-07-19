import { SIGN_IN, SIGN_OUT } from "./userActionTypes";

const initState = {
  logined: false,
};

export default function userReducer(state = initState, { type }) {
  switch (type) {
    case SIGN_IN:
      return { ...state, logined: true };
    case SIGN_OUT:
      return { ...state, logined: false };
    default:
      return state;
  }
}
