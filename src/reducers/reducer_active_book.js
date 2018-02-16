// State argument is not application state, only the state this
// reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  // base case to return current state because this reducer doesn't care about
  // this particular action
  return state;
}

// If action was book_selected, return the book that was selected. If the action
// is anything else, just return the current state.

// Default state is set to null so that it's not undefined when the page first
// loads before anything has been selected.