import React from 'react'

const ReactFormSubmitPreventDefault = () => {

 let submtHandler = (e) => {
        e.preventDefault();
        console.log("Printing on console")   
    }

    return (
        <div>
            <form onSubmit={submtHandler}>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReactFormSubmitPreventDefault
