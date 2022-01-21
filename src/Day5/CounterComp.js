import React, { useState } from 'react'

const CounterComp = ({count,setCount}) => {



    return (
        <div>
            Counter Example 1
            <h1>{count}</h1>

            <button onClick={() => setCount(count+1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count-1)}>Decrease</button>
        </div>
    )
}

export default CounterComp
