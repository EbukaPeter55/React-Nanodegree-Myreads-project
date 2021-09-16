import React, { Component } from "react";



class BookLayoutGrid extends Component {
    state = {
        value: this.props.category
    }

    handleChange = e => {
        const newVal = e.target.value
        this.setState({
            value: newVal
        })
    // Destructure the object to have an access to the onUpdateBook
    const { onUpdateBook } = this.props

    onUpdateBook(this.props.book, newVal)
    }

    render() {
        const { book } = this.props

        return (
            <div>
            <li>
            <div className="book">
                <div className="book-top">
                    {/* <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div> */}
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : '' }}></div>
                    <div className="book-shelf-changer">
                    <select value={this.state.value} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
            </div>
        </li>  
            </div>
        );
    }
}


export default BookLayoutGrid; 