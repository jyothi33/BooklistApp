import React from 'react'
import ImageSection from './ImageSection'
import Price from './Price'
import Title from './Title'

function Booklist({url , title, price , pcolor}) {
    
 return (
     <>
<ImageSection imgUrl={url}/>
<Title title={title}/>
<Price price={price} pcolor={pcolor}/>
     </>

 ) 
 
}

export default Booklist
