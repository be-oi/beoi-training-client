
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import List from './List';
import ListItem from './ListItem';
import { makeSelectTasks, makeSelectLoading, makeSelectError } from './selectors';

export class TaskIndex extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const content = ['jklj', 'lmkm'].map((item, index) => (
      <ListItem key={`item-${index}`}><p>{item}</p></ListItem>
    ));

    return (
      <div>
        <p>test</p>
        <List>{content} </List>
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
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  tasks: makeSelectTasks(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(TaskIndex);
