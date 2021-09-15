import React, { Component } from 'react';
import './SearchResult.styles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



class SearchResult extends Component {
  static propTypes = {
    books : PropTypes.array.isRequired,
    onSearchBook: PropTypes.func.isRequired
}

    state = {
      query: ''
    }

    updateSearchQuery = (query) => {
      const { onSearchBook } = this.props;

     onSearchBook(query);
    console.log(onSearchBook);
      this.setState(()=> ({
          query: query.trim()
      }))
      
      }

  
    render(){
      // object destructuring to make the books standalone variable
      const { query } = this.state;
      const { books } = this.props;
      // console.log(books);

      // const showingBooks = query === ''
      // ? books
      // : books.filter((b) => (
      //     b.title.toLowerCase().includes(query.toLowerCase())
      //       ))

       //  Get currently read book from the books array

        return (
            <div className="search-books">
            <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                 type="text" 
                 placeholder="Search by title or author"
                 value={query}
                 onChange={(event)=> this.updateSearchQuery(event.target.value)}
                 />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {  
                query === '' ?
                ''
                :
                books.map(book =>
            <li key={book.id}>                           
                    <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                    
                  </div>                    
                
              </li>
              )
            }
              </ol>
            </div>
          </div> 
        )
    }
}


export default SearchResult;