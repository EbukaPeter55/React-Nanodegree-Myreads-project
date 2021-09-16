import React, { Component } from 'react';
import BookCategory from './BookCategory';

class BookCover extends Component {

    render(){
    const { books, bookCategories, onUpdateBook } = this.props;
    console.log(books, bookCategories);    
        return(
            <div className="list-books-content">
                <div>
                {/*Loop through the BookCategories array and pass category, 
                books and category key as props to Book Category component via inverse data flow*/}
                    {bookCategories.map(category => (
                        <BookCategory category={category} books={books} key={category.key} onUpdateBook={onUpdateBook} />
                    ))}
                </div>
            </div>
        )
    }
}


export default BookCover;