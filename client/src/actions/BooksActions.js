import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  FILTER_BOOKS,
  SORT_BOOKS
} from '../constants/Page'
import * as utils from '../utils/utils.js'

function requestBooks() {
  return {
    type: REQUEST_BOOKS
  }
}

function receiveBooks(json) {
  return {
    type: RECEIVE_BOOKS,
    books: json
  }
}

export function fetchBooks() {
  return dispatch => {
    dispatch(requestBooks())

    utils.callApi('/api/books')
      .then(items => {
        var data = [];
        for (var i = 0; i < items.length; i++) {
          data.push({
            googlebooks_id: items[i].id, 
            isbn_10: items[i].isbn_10, 
            isbn_13: items[i].isbn_13,
            title: items[i].title, 
            authors: items[i].authors,
            publisher: items[i].publisher, 
            description: items[i].description, 
            page_count: items[i].page_count, 
            categories: items[i].categories,
            thumbnail: items[i].thumbnail, 
            published_date: items[i].published_date
          });
        }
        dispatch(receiveBooks(data))
      })
      .catch(err => console.log(err));
  }
}

export function filterBooks(searchTerm) {
  return {
    type: FILTER_BOOKS,
    searchTerm
  }
}

export function sortBooks(sortOption) {
  return {
    type: SORT_BOOKS,
    sortOption
  }
}