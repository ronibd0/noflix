import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  FILTER_BOOKS,
  SORT_BOOKS
} from '../constants/Page'

const initialState = {
  books: [],
  displayedBooks: []
}

export default function book(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BOOKS:
      return {
        ...state
      }

    case RECEIVE_BOOKS:
      let books = action.books
      return {
        ...state,
        books,
        displayedBooks: books
      }

    case FILTER_BOOKS:
      let displayedBooks = state.books.filter(book => {
        if (book.title.toLowerCase().includes(action.searchTerm.toLowerCase())) {
          return true
        }
        return false
      })
      return {
        ...state,
        displayedBooks,
        displayedBooks: displayedBooks
      }

    case SORT_BOOKS:
      let sortDisplayedBooks
      switch(action.sortOption) {
        case 'Alphabetical':
          sortDisplayedBooks = state.displayedBooks.sort((a,b)=> {
            var a1 = a.title.toLowerCase();
            var b1 = b.title.toLowerCase();
            return a1<b1 ?-1:a1> b1? 1 :0;
          })
          break;
        case 'Oldest':
          sortDisplayedBooks = state.displayedBooks.sort((a,b)=> {
            return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
          })
          break;
        case 'Newest':
          sortDisplayedBooks = state.displayedBooks.sort((a,b)=> {
            return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
          })
          break;
        default:
          break;
      }
      return {
        ...state,
        sortDisplayedBooks,
        displayedBooks: sortDisplayedBooks
      }

    default:
      return state
  }
}