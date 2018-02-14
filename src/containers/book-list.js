// Purpose of this component is to render a list of books

// A container is a React component that has a direct connection to the state
// managed by Redux. ReactRedux is the bridge that combines the two separate libraries
// React and Redux.

// Redux works with the state data, React works with the views, together they
// create a working app.

// Promote BookList component to a container to connect React and Redux

import React, { Component } from 'react';
// Using curly brace means we only import a single property from the library and
// not the entire library
import { connect } from 'react-redux';

// Application state has a books property that is a list of books, we want that
// to appear inside the renderList() container and do that by adding the mapStateToProps
// connection

class BookList extends Component {
  // renderList maps over an array of books which will be passed to the component
  // For each book in the array, create an li that contains book's title
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  // Create ul and then call helper function this.renderList
  render() {
    return (
      <ul className="list-group col-sm 4">
        {this.renderList()}
      </ul>
      )
  }
}

// This is the connection between React and Redux

// When state changes, this function will re-render
function mapStateToProps(state) {
  // Takes application state as an argument and whatever is returned will show up
  // as this.props inside BookList container
  return {
    books: state.books
    // returns this.props.books to be used in renderList above
  };
}

// connect takes a function and a component and produces a container
export default connect(mapStateToProps)(BookList);





