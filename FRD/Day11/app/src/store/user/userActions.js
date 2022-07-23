import { call, put } from "redux-saga/effects";
import * as types from "./userActionTypes";
import { signin as signinApi, register as registerApi } from '../../services'

export function* signin({ payload }) {
    try {
        const response = yield call(signinApi, payload)
        if (response.status === 200) {
            yield put({
                type: types.SIGNIN_SUCCESS,
                payload: response.data.user
            })
        }
    } catch (error) {
        yield put({
            type: types.SIGNIN_FAILURE,
            payload: error
        })
    }
}

export function* register({ payload }) {
    try {
        const response = yield call(registerApi, payload)
        debugger
        if (response.status === 201) {
            yield put({
                type: types.REGISTER_SUCCESS,
                payload: response.data.user
            })
        }
    } catch (error) {
        yield put({
            type: types.REGISTER_FAILURE,
            payload: error
        })
    }
}

export const signout = (payload) => ({ type: types.SIGN_OUT, payload });

