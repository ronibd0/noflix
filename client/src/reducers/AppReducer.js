import { combineReducers } from 'redux'
import moviesReducer from './MoviesReducer'
import musicReducer from './MusicReducer'
import tvReducer from './TVReducer'
import booksReducer from './BooksReducer'

const appReducer = combineReducers({
  moviesReducer: moviesReducer,
  musicReducer: musicReducer,
  tvReducer: tvReducer,
  booksReducer: booksReducer
})

export default appReducer;