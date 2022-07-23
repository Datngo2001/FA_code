import { takeLatest } from 'redux-saga/effects'
import * as types from "./userActionTypes";
import { register, signin } from "./userActions";

export function* watchUserAction() {
    yield takeLatest(types.SIGNIN_REQUEST, signin)
    yield takeLatest(types.REGISTER_REQUEST, register)
}