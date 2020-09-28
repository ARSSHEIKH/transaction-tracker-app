import React, {createContext, useReducer} from 'react'
import TransactionReducer from './transReducer'

const intitialTransactions = [
    { amount: 100, desc: "Cash" },
    { amount: -40, desc: "Book" },
    { amount: -200, desc: "Camera" }
]

export const TransactionContext = createContext(intitialTransactions);

export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, intitialTransactions);

    function addTransaction(transObj){
        dispatch({
            type : "ADD_TRANSACTION",
            payload: {
                amount: transObj.createContext,
                desc: transObj.desc
            },
        })
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}

