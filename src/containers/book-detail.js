import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    // Add initial check so that if there's not an initial book selected, create
    // a message for the user so that JS doesn't error out on a null state
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
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