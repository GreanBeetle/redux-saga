import { takeEvery, call, fork } from 'redux-saga/effects'
import { getUsersAPIrequest } from '../api/users'
import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
} from '../actions/users'
import * as actions from '../actions/users'

function* getUsers() {
    try {
        const result = yield call(getUsersAPIrequest)
        console.log('SAGAS_getUsers_result', result)
    } catch (e) {

    }
}

function* watchGetUsersRequest() {
    yield takeEvery(GET_USERS_REQUEST, getUsers)
}

const UsersSagas = [
    fork(watchGetUsersRequest)   
]

export default UsersSagas
