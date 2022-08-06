import { all } from "redux-saga/effects"
import { watchUserAction } from "./user/userSaga"

export default function* rootSaga() {
    yield all([watchUserAction()])
}