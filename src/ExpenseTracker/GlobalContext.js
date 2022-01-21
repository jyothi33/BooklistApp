import { createContext, useReducer, useState } from "react";
import TransactionReducer from "./TransactionReducer";

export const GlobalContext = createContext();

export const TransactionProvider = ({children}) => {


    const initialState = {
        transactions : [
            {id:1, text:"Salary", amount:500},
            {id:2, text:"Books", amount:-50},
            {id:3, text:"Groceries", amount:-50},
            {id:4, text:"Phone", amount:100},
        ]
    }
    // const transactions = [
    //     {id:1, text:"Salary", amount:500},
    //     {id:2, text:"Books", amount:-50},
    //     {id:3, text:"Groceries", amount:-50},
    //     {id:4, text:"Phone", amount:100},
    // ]

    const [state, dispatch] = useReducer(TransactionReducer, initialState);

    const addTransaction = (newTrans) => {
            dispatch({
                type:'ADD_TRANSACTION',
                payload:newTrans
            });
    }

    const deleteTransaction = (id) => {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    // const [totalTrans, setTotalTrans] = useState(transactions);

    const providerValue = {
        transactions:state.transactions, 
        addTransaction,
        deleteTransaction
    }


    return (
        <GlobalContext.Provider value={providerValue}>
            {children}
        </GlobalContext.Provider>
    )
}