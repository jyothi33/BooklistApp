import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import buyCake from '../redux/Cake/CakeAction'

const HookReduxComponent = () => {

    const state = useSelector(state => state.numOfCakes);

    const dispatch = useDispatch();
    return (
        <>
            <h1>Number of Cakes - {state}</h1>
            <button onClick={ () => dispatch(buyCake())}>Buy Cake</button>
        </>
    )
}




export default HookReduxComponent;
