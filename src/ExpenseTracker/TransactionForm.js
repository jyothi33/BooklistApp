import React, { useContext, useState } from 'react'
import { GlobalContext } from './GlobalContext';

const TransactionForm = () => {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext)

    const addNewTransaction = (e) => {
        e.preventDefault();

        const trans = {
            id:Math.floor((Math.random() * 1000)),
            text,
            amount:parseInt(amount)
        }
        addTransaction(trans);
        setText("");
        setAmount("");
    }
    return (
        <div>
            Add Transactions
            
            <form>
                <label htmlFor="text"> Enter Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
                <br></br>
                <label htmlFor="amount"> Enter Amount</label>
                <input type="amount" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                <br></br>
                <button type="submit" onClick ={addNewTransaction}>Add Transaction</button>
            </form>
        </div>
    )
}

export default TransactionForm
