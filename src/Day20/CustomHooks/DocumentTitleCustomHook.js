import React, { useState } from 'react'
import useDocTitle from './useDocTitle';

const DocumentTitleCustomHook = () => {

    const [count, setCount] = useState(0);

    useDocTitle(count);

    return (
        <div>
            <button onClick={() => setCount(count+1)}>Counter - {count}</button>

        </div>
    )
}

export default DocumentTitleCustomHook
