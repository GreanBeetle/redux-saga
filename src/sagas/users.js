import { takeEvery, call, fork, put } from 'redux-saga/effects'
import { getUsersAPIrequest } from '../api/users'
import {
    GET_USERS_REQUEST,
    getUsersSuccess
} from '../actions/users'
import * as actions from '../actions/users'

function* getUsers() {
    try {
        const result = yield call(getUsersAPIrequest)
        yield put(getUsersSuccess({ items: result.data.data }))
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
