import { SIGN_IN, SIGN_OUT } from "./userActionTypes";

export const signin = (payload) => ({ type: SIGN_IN, payload });
export const signout = (payload) => ({ type: SIGN_OUT, payload });
