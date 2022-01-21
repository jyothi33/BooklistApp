import React from 'react'
import { connect } from 'react-redux'
import buyCake from '../redux/Cake/CakeAction'

const CakeComponent = (props) => {
    return (
        <>
            <h1>No of Cakes - {props.cakeCount}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </>
    )
}


const mapStateToProps = state => {
    return {
        cakeCount: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent) 
