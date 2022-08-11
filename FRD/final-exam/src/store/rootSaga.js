import { all } from "redux-saga/effects";
import watchUserAction from "./reducer/user/userSaga";

export default function* rootSaga() {
    yield all([watchUserAction()])
}