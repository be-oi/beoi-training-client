import { fromJS } from 'immutable';

import {
  LOAD_TASKS,
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  tasks: false,
});

function taskIndexReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TASKS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_TASKS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('tasks', action.tasks);
    case LOAD_TASKS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)
        .set('tasks', false);
    default:
      return state;
  }
}

export default taskIndexReducer;
