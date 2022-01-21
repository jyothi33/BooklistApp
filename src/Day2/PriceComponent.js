import React from 'react'

const PriceComponent = ({price, color}) => {
    return (
        <h3 style={{color:color}}>{price}</h3>
    )
}

export default PriceComponent
