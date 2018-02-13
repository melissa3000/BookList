import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({
  // acts like a key:value pair
  books: BooksReducer
});

export default rootReducer;
