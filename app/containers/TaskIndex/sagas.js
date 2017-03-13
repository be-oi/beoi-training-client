import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getAll } from 'firebase-saga';
import * as actions from './actions';
import { LOAD_TASKS } from './constants';

function* fetchPosts() {
  try {
    const tasks = yield call(getAll, 'tasks');
    yield put(actions.tasksLoaded(tasks));
  } catch (error) {
    yield put(actions.taskLoadingError(error));
  }
}

function* watchFetchPosts() {
  yield takeEvery(LOAD_TASKS, fetchPosts);
}

export default [
  watchFetchPosts,
];
