import * as types from "./todoActionTypes";
import {
  fetchTodos,
  createTodo as createTodoApi,
  removeTodo as removeTodoApi,
} from "../../services";

export function fetchTodo() {
  return async function (dispatch) {
    try {
      dispatch({ type: types.FETCH_TODO_REQUEST });

      const result = await fetchTodos();
      if (result.status === 200) {
        dispatch({
          type: types.FETCH_TODO_SUCCESS,
          payload: result.data,
        });
      }
    } catch (err) {
      dispatch({
        type: types.FETCH_TODO_FAILURE,
        payload: err,
      });
    }
  };
}

export const createTodo = (payload) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_TODO_REQUEST });

    const result = await createTodoApi(payload);
    if (result.status === 201) {
      dispatch({
        type: types.CREATE_TODO_SUCCESS,
        payload: result.data,
      });
    }
  } catch (err) {
    dispatch({
      type: types.CREATE_TODO_FAILURE,
      payload: err,
    });
  }
};

export const removeTodo = (payload) => async (dispatch) => {
  try {
    dispatch({ type: types.REMOVE_TODO_REQUEST });

    const result = await removeTodoApi(payload.id);
    if (result.status === 200) {
      dispatch({
        type: types.REMOVE_TODO_SUCCESS,
        payload: payload,
      });
    }
  } catch (err) {
    dispatch({
      type: types.REMOVE_TODO_FAILURE,
      payload: err,
    });
  }
};
