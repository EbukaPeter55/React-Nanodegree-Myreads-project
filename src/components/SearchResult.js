import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookLayoutGrid from './BookLayoutGrid';


class SearchResult extends Component {
  static propTypes = {
    books : PropTypes.array.isRequired,
    onSearchBook: PropTypes.func.isRequired
}
  
    render(){
      // object destructuring to make the books standalone variable
      const { books, booksSearch, onUpdateBook } = this.props;

      const booksUpdate = booksSearch.map(book => {
          books.map(c => {
              if (c.id === book.id) {
                  book.shelf = c.shelf
              }
              return c;
          })
          return book;
      });

        return (
          
                <div>
                 {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <div className="search-books-results">
                    <div className="books-grid">
                        {booksUpdate.map(book => (
                            <BookLayoutGrid
                                book={book}
                                key={book.id}
                                category={book.shelf ? book.shelf : 'none'}
                                onUpdateBook={onUpdateBook}                               
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}


export default SearchResult;