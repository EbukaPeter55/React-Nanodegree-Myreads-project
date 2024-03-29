import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';



class SearchInputBooks extends Component {
    //    Set the expected proptypes we want to receive to enable strict typing
    static propTypes = {
        books : PropTypes.array.isRequired,
        booksSearch: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
        onSearchBook: PropTypes.func.isRequired
    }

    state = {
        value: ''
    }

    handleChange = event => {
        const { onSearchBook } = this.props
        const newValue = event.target.value
        this.setState({ value: newValue }, () => {
            onSearchBook(newValue)
        });
    };

    render() {
        const { onUpdateBook, books, booksSearch, bookCategories,  onSearchBook }
         = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link to='/' onClick={this.props.resetSearchArray} className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            value={this.state.value}
                            placeholder="Search by title or author"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <SearchResult
                    books={books}
                    booksSearch={booksSearch}
                    onUpdateBook={onUpdateBook}
                    bookCategories={bookCategories}
                    onSearchBook={onSearchBook}                   
                />
            </div>
        );
    }
}


export default SearchInputBooks;