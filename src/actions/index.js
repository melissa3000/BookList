// Contains all of the action creators

// book is an object with a book title
export function selectBook(book) {
  // selectBook is an action creator and needs to return an action - an object
  // with a type property. Every action has a type and often contains a payload.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}