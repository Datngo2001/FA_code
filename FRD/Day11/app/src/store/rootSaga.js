import { all } from 'redux-saga/effects'
import { watchTodoAction } from './todo/todoSaga'
import { watchUserAction } from './user/userSaga'

export default function* rootSaga() {
    yield all([watchTodoAction(), watchUserAction()])
}