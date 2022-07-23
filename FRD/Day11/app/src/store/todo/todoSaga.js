import { takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchTodo, createTodo, removeTodo } from './todoActions'
import * as types from "./todoActionTypes";

export function* watchTodoAction() {
    // tu dong cancle action truoc neu dc goi lien tuc
    yield takeLatest(types.FETCH_TODO_REQUEST, fetchTodo);
    yield takeEvery(types.CREATE_TODO_REQUEST, createTodo);
    yield takeEvery(types.REMOVE_TODO_REQUEST, removeTodo);
}
