import { call, put } from "redux-saga/effects";
import * as types from "./todoActionTypes";
import {
  fetchTodos as fetchTodosApi,
  createTodo as createTodoApi,
  removeTodo as removeTodoApi,
} from "../../services";

export function* fetchTodos() {
  try {
    const response = yield call(fetchTodosApi);
    if (response.status === 200) {
      yield put({
        type: types.FETCH_TODO_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: types.FETCH_TODO_FAILURE,
      payload: error,
    });
  }
}

export function* createTodo(action) {
  try {
    const response = yield call(createTodoApi, action.payload);
    if (response.status === 201) {
      yield put({
        type: types.CREATE_TODO_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: types.CREATE_TODO_FAILURE,
      payload: error,
    });
  }
}
