import React, { useEffect, useRef } from 'react'

const InputFocusHook = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])


    return (
        <div>
            <input ref={inputRef} type="text"></input>
        </div>
    )
}

export default InputFocusHook
