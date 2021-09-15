import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI';
import Category from './components/category/category';
import SearchResult from './components/SearchResult/SearchResult';
import { Route } from 'react-router-dom';



class BooksApp extends React.Component {
  state = {
    books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  componentDidMount(){
   BooksAPI.getAll()
   .then((books)=>{
    //  console.log(books);
    //  console.log(this.state.books);
     this.setState(()=> ({
       books
     }))
     console.log(this.state);
   })
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((shelf) => {
      this.setState((currentstate) => ({
        books: currentstate.books.concat([shelf])
      }))
    })
  }

  searchBook = (query) => {
    BooksAPI.search(query)
    .then((books)=> {
      console.log(books);
      Array.isArray(books) ?
      this.setState({
        books
      }) 
      : 
      this.setState({
        books: []
      })
     })
    .catch ( (error) =>{
      return error;
    })
  }


  render() {
    return (
      <div className="app">
      {/*Path must match the URL to navigate to the main/category page*/}
      <Route exact path="/" render={()=> (
        <Category 
        books={this.state.books}
        />
      )}/>
      <Route path="/search" render={()=> (
        <SearchResult
        onSearchBook={(query)=>{
          this.searchBook(query)
        }}
          books={this.state.books}
          />
      )}/>     
      
      </div>
    )
  }
}

export default BooksApp
