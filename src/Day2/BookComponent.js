import React from 'react'
import booksArr from './BookArray'
import BookEx2 from './BookEx2'
import ImageComponent from './ImageComponent'
import PriceComponent from './PriceComponent'
import TitleComponent from './TitleComponent'

const BookComponent = () => {
    return (
        <div>
            {booksArr.map( (book, index) =>  <div key={index}>
                <BookEx2 book={book} />
                {/* <TitleComponent title={book.title}/>
                <ImageComponent url={book.url} /> 
                <PriceComponent price={book.price} color="red"/> */}
                </div>)}
        </div>
    )
}

export default BookComponent
