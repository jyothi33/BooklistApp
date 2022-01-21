import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const TransactionHistory = () => {

    const {transactions, deleteTransaction} = useContext(GlobalContext)
    console.log(transactions)

    return (
        <div>
            Transaction History
            {
                transactions.map( (transaction) => (
                <div key={transaction.id}>
                    {transaction.text} - {transaction.amount}
                       
                    <button onClick={ () => deleteTransaction(transaction.id) }>Delete</button>
                </div>
                
                )
                )
            }
        </div>
    )
}

export default TransactionHistory
