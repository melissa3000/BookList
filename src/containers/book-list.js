// Purpose of this component is to render a list of books

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions.index';
// make sure actions flow through reducers in application
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm 4">
        {this.renderList()}
      </ul>
      )
  }
}

// This is the connection between React and Redux

function mapStateToProps(state) {
  // Takes application state as an argument and whatever is returned will show up
  // as this.props inside BookList container
  return {
    books: state.books
  };
}

// Anything returned from this function will end up props on the BookList container.
// Allows you to call this.book.selectBook
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of the
  // reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about this
// new dispatch method selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);





