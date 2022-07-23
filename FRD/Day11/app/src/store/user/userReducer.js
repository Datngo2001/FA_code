import * as types from "./userActionTypes";

const initState = {
  user: null,
  loading: false,
  error: null
};

export default function userReducer(state = initState, { type, payload }) {
  switch (type) {
    case types.SIGNIN_REQUEST:
    case types.REGISTER_REQUEST:
    case types.LOGOUT_REQUEST:
      return { loading: true, user: null, error: null };
    case types.SIGNIN_FAILURE:
    case types.REGISTER_FAILURE:
    case types.LOGOUT_FAILURE:
      return { loading: false, user: null, error: payload };
    case types.SIGNIN_SUCCESS:
      return { loading: false, user: payload, error: null };
    case types.REGISTER_SUCCESS:
      return { loading: false, user: null, error: null };
    default:
      return state;
  }
}
