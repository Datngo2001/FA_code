import { takeLatest } from "redux-saga/effects";
import { REGISTER_REQUEST, SIGNIN_REQUEST } from "./userActionTypes";
import { register, signin } from "./userActions";

export default function* watchUserAction() {
    yield takeLatest(SIGNIN_REQUEST, signin)
    yield takeLatest(REGISTER_REQUEST, register)
}