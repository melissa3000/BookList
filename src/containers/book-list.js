// Purpose of this component is to render a list of books

// A container is a React component that has a direct connection to the state
// managed by Redux. ReactRedux is the bridge that combines the two separate libraries
// React and Redux.

// Redux works with the state data, React works with the views, together they
// create a working app.

import React, { Component } from 'react';

export default class BookList extends Component {
  // renderList maps over an array of books which will be passed to the component
  // For each book in the array, create an li that contains book's title
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title})</li>
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