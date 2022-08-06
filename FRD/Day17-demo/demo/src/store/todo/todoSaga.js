import { takeLatest, takeEvery } from "redux-saga/effects";
import * as types from "./todoActionTypes";
import { fetchTodos, createTodo } from "./todoActions";

export function* watchTodoActions() {
  yield takeLatest(types.FETCH_TODO_REQUEST, fetchTodos);
  yield takeEvery(types.CREATE_TODO_REQUEST, createTodo);
}
