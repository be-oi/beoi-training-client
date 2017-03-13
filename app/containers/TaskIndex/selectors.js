
import { createSelector } from 'reselect';

const selectTaskIndex = (state) => state.get('taskIndex');

const makeSelectLoading = () => createSelector(
  selectTaskIndex,
  (taskIndexState) => taskIndexState.get('loading')
);

const makeSelectError = () => createSelector(
  selectTaskIndex,
  (taskIndexState) => taskIndexState.get('error')
);

const makeSelectTasks = () => createSelector(
  selectTaskIndex,
  (taskIndexState) => taskIndexState.get('tasks')
);

export {
  selectTaskIndex,
  makeSelectLoading,
  makeSelectError,
  makeSelectTasks,
};
