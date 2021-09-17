import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import PropTypes from 'prop-types';
import BookCover from './BookCover';


class Category extends Component {
//    Set the expected proptypes we want to receive to enable strict typing
static propTypes = {
    books : PropTypes.array.isRequired ,
    onUpdateBook: PropTypes.func.isRequired   
}

    render(){
    const { books, bookCategories, onUpdateBook } = this.props;

    // console.log(books);

  
        return (
          <div className="list-books">
          <NavBar/>          
          <BookCover books={books} bookCategories={bookCategories} onUpdateBook={onUpdateBook} />
      </div>
        )
    }
}


export default Category;