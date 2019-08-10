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
            googlebooks_id: items[i].items[0].id, 
            isbn_10: items[i].items[0].volumeInfo.industryIdentifiers[0].identifier, 
            isbn_13: items[i].items[0].volumeInfo.industryIdentifiers[1].identifier,
            title: items[i].items[0].volumeInfo.title, 
            authors: items[i].items[0].volumeInfo.authors,
            publisher: items[i].items[0].volumeInfo.publisher, 
            published_date: items[i].items[0].volumeInfo.description,
            description: items[i].items[0].volumeInfo.description, 
            page_count: items[i].items[0].volumeInfo.pageCount, 
            categories: items[i].items[0].volumeInfo.categories,
            thumbnail: items[i].items[0].volumeInfo.imageLinks.thumbnail
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