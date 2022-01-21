import React, { useState } from 'react'

function useCounterHookNew() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter( prev => prev + 1);
    }

    const decrement = () => {
        setCounter( prev => prev - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    return [counter, increment, decrement, reset];
}

export default useCounterHookNew
