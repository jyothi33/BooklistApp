import axios from 'axios';
import React, { useEffect, useState } from 'react'

const QuoteGenerator = () => {


    const [quote, setQuote] = useState([]);

    useEffect(() => {


       const getQuote = async () => {

            // const response = await fetch(`https://type.fit/api/quotes`).
            // then( (res) => {return res.json()}).catch( (err) => console.log(err))
            // ;
        
            //const result = await response.json();

            const response = await axios.get(`https://type.fit/api/quotes`).then( (res) => res.data).catch( err => console.log(err))
            //console.log(response)
            setQuote(response)

        }
        
        getQuote();

    }, [])


    return (
        <div>
            Fetch Quotes

            {
               quote && quote.map( (quote) => <div key={quote.text}><h1>{quote.text}</h1> <h3>{quote.author}</h3></div>)
            }
        </div>
    )
}

export default QuoteGenerator
