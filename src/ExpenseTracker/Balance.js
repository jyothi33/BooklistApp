import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const Balance = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    console.log(`amounts - ${amounts}`)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    console.log(`total - ${total}`)
    return (
        <div>
            TOTAL Balance : ${total}
        </div>
    )
}

export default Balance
