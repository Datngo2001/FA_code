import { takeLatest } from "redux-saga/effects";
import { signin } from "./userAction";
import { SIGNIN_REQUEST } from "./userActionType";

export function* watchUserAction() {
    yield takeLatest(SIGNIN_REQUEST, signin)
}