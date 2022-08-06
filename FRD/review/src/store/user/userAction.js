import { signin as signinApi } from '../../api'
import { call, put } from 'redux-saga/effects'
import { SIGNIN_SUCCESS, SIGNIN_FAILURE } from './userActionType'

export function* signin({ payload }) {
    try {
        const response = yield call(signinApi, payload)
        if (response.status === 200) {
            yield put({
                type: SIGNIN_SUCCESS,
                payload: response.data
            })
        }
    } catch (error) {
        yield put({
            type: SIGNIN_FAILURE,
            payload: error
        })
    }
}