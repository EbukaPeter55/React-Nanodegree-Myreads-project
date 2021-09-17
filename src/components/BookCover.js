import React, { Component } from 'react';
import BookCategory from './BookCategory';
import PropTypes from 'prop-types';


class BookCover extends Component {
    //    Set the expected proptypes we want to receive to enable strict typing
static propTypes = {
    books : PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired, 
    bookCategories: PropTypes.array.isRequired  
}

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