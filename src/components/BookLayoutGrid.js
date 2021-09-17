import React, { Component } from "react";



class BookLayoutGrid extends Component {
    state = {
        value: this.props.category
    }

    handleChange = event => {
        const newVal = event.target.value
        this.setState({
            value: newVal
        })
    // Destructure the object to have an access to the onUpdateBook
    const { onUpdateBook } = this.props
    onUpdateBook(this.props.book, newVal)
    }

    render() {
        const { book, onUpdateBook } = this.props
        console.log(onUpdateBook);
        const { value } = this.state;
        
        return (
            <div>
                <li>
                <div className="book">
                    <div className="book-top">                        
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : '' }}></div>
                        <div className="book-shelf-changer">
                        <select value={value} onChange={this.handleChange}>
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
            </div>
        );
    }
}


export default BookLayoutGrid; 