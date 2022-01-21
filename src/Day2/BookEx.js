import React from 'react'
import booksArr from './BookArray'


const BookEx = () => {
    return (
        <div>
            {booksArr.map( (book) => <p><h1>{book.title}</h1><hr/></p>)}
        </div>
    )
}

export default BookEx
