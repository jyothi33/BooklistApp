import React from 'react'

const ChildComp = ({fun}) => {

    let clickHandler = () => fun(9);  

    console.log(a)

    return (
        <button onClick={clickHandler}>
            Child Component
        </button>
    )
}

export default ChildComp
