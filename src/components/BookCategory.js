import React, { Component } from "react";
import { Link } from 'react-router-dom';
import BookLayoutGrid from "./BookLayoutGrid";


class BookCategory extends Component {

    render() {
    const { books, category, onUpdateBook } = this.props;
    // Filter out books whoose shelf equals the category key
    const selectedBooks = books.filter(book => {
        return book.shelf === category.key
    })
    console.log(selectedBooks);
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{category.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {selectedBooks.map(book => (
                            <BookLayoutGrid book={book} key={book.id} category={category.key} onUpdateBook={onUpdateBook} />
                        ))}
                    </ol>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
        </div>
        );
    }
}



export default BookCategory;