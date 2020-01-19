/**
 * @REDUX_SAGA_FLOW :
 *  - Watcher sag -> actions -> Worker saga
 *  - Watcher saga dispatches some actions, these actions awake the worker saga to
 *    do some work with respect to the actions.
 */

import { takeEvery, takeLatest, take, put, call } from 'redux-saga/effects';
import * as Actions from '../actions';

function* loadImages() {
    console.log('Loading Images into Saga!!!');
}

function* rootSaga() {
    // takeEvery(type, workerSaga);
    yield takeLatest(Actions.LOAD_IMAGES, loadImages);
}

export default rootSaga;
