import React from 'react'

const BookEx2 = ({book}) => {

    let {url} = book;

    return (
        <div>
            <img src={url}></img>
        </div>
    )
}

export default BookEx2
