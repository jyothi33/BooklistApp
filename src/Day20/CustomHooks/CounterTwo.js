import React, { useState } from 'react'
import useCounterHookNew from './useCounterHookNew';

const CounterTwo = () => {

    const [counter, increment, decrement, reset] = useCounterHookNew();

    return (
        <div>
            <h2> Counter - {counter}</h2>
            <button onClick={increment}> Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo
