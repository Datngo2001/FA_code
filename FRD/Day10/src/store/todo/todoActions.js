import api from "../../api/_axios";
import { ADD_TODO, CREATE_TODO_REQUEST, CREATE_TODO_SUCCESS, FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, REMOVE_TODO, REMOVE_TODO_FAILURE, REMOVE_TODO_REQUEST, REMOVE_TODO_SUCCESS } from "./todoActionTypes";
import { createTodo as createTodoApi, removeTodo as removeTodoApi, } from "../../api";


export const removeTodo = ({ id }) => {
  return async function (dispatch) {
    try {
      dispatch({ type: REMOVE_TODO_REQUEST })
      const result = await removeTodoApi(id);
      if (result.status === 200) {
        dispatch({ type: REMOVE_TODO_SUCCESS, payload: id })
      }
    } catch (error) {
      dispatch({ type: REMOVE_TODO_FAILURE, payload: error })
    }
  }
};
export const fetchTodo = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: FETCH_TODO_REQUEST })
      const result = await api.get('/todos');
      if (result.status === 200) {
        dispatch({ type: FETCH_TODO_SUCCESS, payload: result.data })
      }
    } catch (error) {
      dispatch({ type: FETCH_TODO_FAILURE, payload: error })
    }
  }
};

export const createTodo = (payload) => {
  return async function (dispatch) {
    try {
      dispatch({ type: CREATE_TODO_REQUEST })
      const result = await createTodoApi(payload);
      if (result.status === 201) {
        dispatch({ type: CREATE_TODO_SUCCESS, payload: result.data })
      }
    } catch (error) {
      dispatch({ type: FETCH_TODO_FAILURE, payload: error })
    }
  }
};

