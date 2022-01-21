import React from 'react'
import Balance from './Balance'
import { TransactionProvider } from './GlobalContext'
import HeaderComponent from './HeaderComponent'
import TransactionAmount from './TransactionAmount'
import TransactionForm from './TransactionForm'
import TransactionHistory from './TransactionHistory'

const ExpenseContainer = () => {
    return (
        <div>
            <TransactionProvider>
            <HeaderComponent />
            <hr></hr>
            <Balance />
            <hr></hr>
            <TransactionAmount />
            <hr></hr>
            <TransactionHistory />
            <hr></hr>
            <TransactionForm />
            </TransactionProvider>
        </div>
    )
}

export default ExpenseContainer
