import React from 'react'

const Child = ({greeting}) => {
    
    return (
        <div>
            <button onClick={() => greeting(3)}>Click</button>
        </div>
    )
}

export default Child
