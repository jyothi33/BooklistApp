import React, { useState } from 'react'
import CounterComp from './CounterComp';
import CounterComp2 from './CounterComp2';

const ParentCountComp = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <CounterComp count={count} setCount={setCount}/>
            <CounterComp2 count={count} />
        </div>
    )
}

export default ParentCountComp
