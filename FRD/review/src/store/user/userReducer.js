import { SIGNIN_FAILURE, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "./userActionType";

const initState = {
    user: null,
    loading: false,
    error: null
}

export default function userReducer(state = initState, { type, payload }) {
    switch (type) {
        case SIGNIN_REQUEST:
            return { loading: true, user: null, error: null };
        case SIGNIN_FAILURE:
            return { loading: false, user: null, error: payload }
        case SIGNIN_SUCCESS:
            return { loading: false, user: payload, error: null }
        default:
            return state;
    }
}