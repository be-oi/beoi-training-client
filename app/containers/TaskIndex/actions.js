
import {
  LOAD_TASKS,
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS_ERROR,
} from './constants';

export function loadTasks() {
  return {
    type: LOAD_TASKS,
  };
}

export function tasksLoaded(tasks) {
  return {
    type: LOAD_TASKS_SUCCESS,
    tasks,
  };
}

export function taskLoadingError(error) {
  return {
    type: LOAD_TASKS_ERROR,
    error,
  };
}
