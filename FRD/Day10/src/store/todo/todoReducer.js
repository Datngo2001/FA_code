import { FETCH_TODO_REQUEST, FETCH_TODO_FAILURE, FETCH_TODO_SUCCESS, CREATE_TODO_REQUEST, CREATE_TODO_FAILURE, CREATE_TODO_SUCCESS, REMOVE_TODO_REQUEST, REMOVE_TODO_FAILURE, REMOVE_TODO_SUCCESS, UPDATE_TODO_REQUEST, UPDATE_TODO_FAILURE, UPDATE_TODO_SUCCESS } from "./todoActionTypes";

const initValue = {
  loading: true,
  list: [],
  error: null
}

export default function todoReducer(state = initValue, { type, payload }) {
  switch (type) {
    case FETCH_TODO_REQUEST:
    case CREATE_TODO_REQUEST:
    case REMOVE_TODO_REQUEST:
    case UPDATE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case CREATE_TODO_FAILURE:
    case FETCH_TODO_FAILURE:
    case REMOVE_TODO_FAILURE:
    case UPDATE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        list: payload,
        error: null
      }
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list, payload],
      }
    case REMOVE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter(item => item.id !== payload),
      }
    case UPDATE_TODO_SUCCESS:
      let index = state.list.findIndex(item => item.id === payload.id)
      state.list[index] = payload
      return {
        ...state,
        loading: false,
        list: [...state.list],
      }
    default:
      return state;
  }
}
