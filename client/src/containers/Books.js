import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as booksActions from '../actions/BooksActions'

import NavBar from '../components/NavBar'
import ResultsBar from '../components/ResultsBar'
import Grid from '../components/Grid'
import FooterBar from '../components/FooterBar'

class Books extends Component {
  handleSearch(e) {
    this.props.booksActions.filterBooks(e.target.value)
  }

  componentDidMount() {
    this.props.booksActions.fetchBooks()
  }

  render() {
    let { displayedBooks } = this.props.booksReducer

    return (
      <div>
        <NavBar onChange={this.handleSearch.bind(this)} type={3}/>
        <br/>
        <ResultsBar count={displayedBooks.length} type={3}/>
        <Grid
          gridData={JSON.stringify(displayedBooks)}
          type={3}
        />
        <br/>
        <FooterBar/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    booksReducer: state.booksReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    booksActions: bindActionCreators(booksActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)