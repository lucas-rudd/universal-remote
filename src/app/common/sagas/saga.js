import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_SUCCESS, API_CALL_REQUEST, API_CALL_FAILURE } from '../../config/ActionTypes';
import { PHILIPS_HUE_API } from '../../config/Constants';

// function that makes the api request and returns a Promise for response
function fetchIp() {
    return axios({
        method: 'get',
        url: PHILIPS_HUE_API.upnp,
    });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(fetchIp);
        const { internalipaddress, id } = response.data;

        // dispatch a success action to the store with the new dog
        yield put({ type: API_CALL_SUCCESS, internalipaddress, id });
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: API_CALL_FAILURE, error });
    }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
    yield takeLatest(API_CALL_REQUEST, workerSaga);
}
