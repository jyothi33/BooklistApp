import React, { useState } from 'react'
import useInputNew from './useInputNew';

const InputTextCustomHook = () => {

    const [firstName, bindFirstName, resetFirstName] = useInputNew('');
    const [lastName, bindLastName, resetLastName] = useInputNew('');

    const submitHandler = (e) => {

        e.preventDefault();
        alert(` User Name - ${firstName} ${lastName}`);
        resetFirstName('')
        resetLastName('')
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label> First Name</label>
                <input type="text" 
                {...bindFirstName}
                
                ></input>
                <br></br>
                <label>Last Name</label>
                <input type="text" 
                {...bindLastName}
                ></input>
                <br></br>
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default InputTextCustomHook
