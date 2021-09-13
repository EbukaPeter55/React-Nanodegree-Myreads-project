import React, { Component } from 'react';
import './category.styles.css';
import NavBar from '../NavBar/NavBar';
import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom';



class Category extends Component {
//    Set the expected proptypes we want to receive to enable strict typing
static propTypes = {
    books : PropTypes.array.isRequired    
}

    state = {
    booksData: ''
    }
    // componentDidMount(){
    //     console.log(this.state.books);

    // }

    render(){
    const { books } = this.props;
    console.log(books);
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
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    { 
                        currentReadBooks.map(currentRead =>
                    <li key={currentRead.id}>                           
                            <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${currentRead.imageLinks.thumbnail})` }}></div>
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
                            <div className="book-title">{currentRead.title}</div>
                            <div className="book-authors">{currentRead.authors}</div>
                            
                          </div>                    
                        
                      </li>
                      )
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        wantToReads.map(wantToRead => 
                            <li key={wantToRead.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${wantToRead.imageLinks.thumbnail})`}}></div>
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
                              <div className="book-title">{wantToRead.title}</div>
                              <div className="book-authors">{wantToRead.authors}</div>
                            </div>
                          </li>  
                            )
                    
                    }                   
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        reads.map(read =>      
                            <li key={read.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${read.imageLinks.thumbnail})` }}></div>
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
                              <div className="book-title">{read.title}</div>
                              <div className="book-authors">{read.authors}</div>
                            </div>
                          </li>)
                    }                   
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
            <Link to="/searchresult">
                 <button>Add a book</button>
            </Link> 
             
            </div>
          </div>
        )
    }
}


export default Category;