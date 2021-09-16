import React, { Component } from 'react';
import './category.styles.css';
import NavBar from '../NavBar/NavBar';
import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom';
import BookCover from '../BookCover';


class Category extends Component {
//    Set the expected proptypes we want to receive to enable strict typing
static propTypes = {
    books : PropTypes.array.isRequired ,
    onUpdateBook: PropTypes.func.isRequired   
}

    state = {
      value: this.props.shelf
    }

// componentDidMount(){
//   const { onUpdate } = this.props
//   console.log(onUpdate());
// }
    handleChange = (event) =>{
      console.log(this.state.value);
      const newValue = event.target.value
      console.log(newValue);
      this.setState({
        value: newValue
      })
    }
  
    // updateShelf = (book) => { 
    //   const {onUpdate, books} = this.props 

    //   console.log(books);

    //   // const params = this.props.match.params
    //   onUpdate(book)
    //   console.log(onUpdate(book));
    //   console.log(book);
    //   this.setState({
        
    //   })
    //   console.log(books);
    // }

    render(){
    const { books, bookCategories, onUpdateBook } = this.props;

    // console.log(books);

    //  Get currently read book from the books array
    const currentReadBooks = books.filter(book => book.shelf === "currentlyReading");
    console.log(currentReadBooks);
    //  Get want to read book from the books array data
    const wantToReads = books.filter(book => book.shelf === "wantToRead");
    console.log(wantToReads);
    // Get Read books from the book array
    const reads = books.filter(book => book.shelf === "read");
    console.log(reads);

        return (
          <div className="list-books">
          <NavBar/>
          
          <BookCover books={books} bookCategories={bookCategories} onUpdateBook={onUpdateBook} />
      </div>
        )
    }
}


export default Category;