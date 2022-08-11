import { call, put } from 'redux-saga/effects'
import { login, register as registerApi } from '../../../api/auth'
import { SIGNIN_FAILURE, SIGNIN_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILURE } from './userActionTypes'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const MAX_AGE = 5000

export function* signin({ payload }) {
    try {
        const response = yield call(login, payload)
        cookies.set('token', response.data.accessToken, { maxAge: MAX_AGE, httpOnly: true })
        cookies.set('user', response.data.user, { maxAge: MAX_AGE })
        yield put({
            type: SIGNIN_SUCCESS,
            payload: response.data.user
        })
    } catch (error) {
        yield put({
            type: SIGNIN_FAILURE,
            payload: error
        })
    }
}


export function* register({ payload }) {
    try {
        const response = yield call(registerApi, payload)
        cookies.set('token', response.data.accessToken, { maxAge: MAX_AGE, httpOnly: true })
        cookies.set('user', response.data.user, { maxAge: MAX_AGE })
        yield put({
            type: REGISTER_SUCCESS,
            payload: response.data.user
        })
    } catch (error) {
        yield put({
            type: REGISTER_FAILURE,
            payload: error
        })
    }
}