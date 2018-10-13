import React from 'react'

import SearchPage from './SearchPage';
import MainPage from './MainPage';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
// Calls the API, then fetches the books once component mounts, and updates state
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        <MainPage
          books={this.state.books}
         />
      </div>
    )
  }
}

export default BooksApp
