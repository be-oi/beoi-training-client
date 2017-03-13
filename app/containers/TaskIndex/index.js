
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import List from './List';
import ListItem from './ListItem';
import { makeSelectTasks, makeSelectLoading, makeSelectError } from './selectors';
import { loadTasks } from './actions';

export class TaskIndex extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.onRefreshTasks();
  }

  render() {
    let content = 'empty';
    if (this.props.tasks) {
      content = this.props.tasks.data;
    }
    if (this.props.error) {
      content = 'error';
    }

    return (
      <div>
        <p>test - loading: { this.props.loading }</p>
        <List><ListItem>{content}</ListItem></List>
      </div>
    );
  }
}

TaskIndex.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  tasks: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  onRefreshTasks: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onRefreshTasks: () => dispatch(loadTasks()),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  tasks: makeSelectTasks(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
