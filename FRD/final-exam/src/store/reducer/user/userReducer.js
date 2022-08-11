import { REGISTER_SUCCESS, RESTORE_USER, SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "./userActionTypes";

const init = {
    user: null,
    loading: false,
    error: null
}

export default function userReducer(state = init, { type, payload }) {
    switch (type) {
        case RESTORE_USER:
            return { loading: false, user: payload, error: null };
        case SIGNIN_REQUEST:
            return { loading: true, user: null, error: null };
        case SIGNIN_FAILURE:
            return { loading: false, user: null, error: payload }
        case SIGNIN_SUCCESS:
        case REGISTER_SUCCESS:
            return { loading: false, user: payload, error: null }
        default:
            return state;
    }
}