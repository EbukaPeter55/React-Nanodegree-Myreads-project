import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI';
import MainPage from './components/MainPage';
import SearchInputBooks from './components/SearchInputBooks';
import { Route } from 'react-router-dom';

const bookCategories = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];

class BooksApp extends React.Component {
  state = {
    books: [],
    booksSearch: [],
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
    BooksAPI.update(book, shelf);
    if(shelf === 'none'){
      this.setState(currentState =>({
        books: currentState.books.filter(c => c.id !== book.id)
      }));
    }else {
      book.shelf = shelf;
      this.setState(currentState => ({
        books: currentState.books.filter(c => c.id !== book.id).concat(book)
      }));
    }
  }

  searchBook = (query) => {
    if (!(query.length < 1)) {
      BooksAPI.search(query)
      .then((books) => {
        books.error 
        ?
        this.setState({
          booksSearch: [],
          })
          :
          this.setState({ booksSearch: books });    
      })
    } else {
      this.setState({
        booksSearch: [] 
        });
    }
console.log(this.state.display);
  }

  resetSearch = () => {
    this.setState({
      booksSearch: []
    })
  }


  render() {
    return (
      <div className="app">
      {/*Path must match the URL to navigate to the main/category page*/}
      <Route exact path="/" render={()=> (
        <MainPage 
        books={this.state.books}
        bookCategories={bookCategories}
        onUpdateBook={ this.updateBookShelf}
        />
      )}/>
      <Route path="/search" render={()=> (
        <SearchInputBooks
          bookCategories={bookCategories}
          onSearchBook={this.searchBook}
          books={this.state.books}
          booksSearch={this.state.booksSearch}
          onUpdateBook={ this.updateBookShelf}
          resetSearchArray={this.resetSearch}
          />
      )}/>     
      
      </div>
    )
  }
}

export default BooksApp
