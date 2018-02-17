import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    return (
      <div>Book Detail!</div>
      );
  }
}

// Connect book detail to the redux store so it's told about changes to the
// active book state

// Argument is the application state. This will return props object that will be
// used inside the BookDetail above.
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);