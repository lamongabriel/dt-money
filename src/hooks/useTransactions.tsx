import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export interface Transaction{
  id: string
  name: string
  price: number
  type: string
  category: string
  createdAt: string
}

interface TransactionsProviderProps{
  children: ReactNode
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export type TransactionUpdateProps = Omit<Transaction, 'createdAt'>

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
  deleteTransaction: (transaction: TransactionInput) => Promise<void>
  updateTransaction: (transaction: TransactionUpdateProps) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(()=> {
    api.get('transactions').then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transaction: TransactionInput){
    const response = await api.post('/transactions', {...transaction, createdAt: new Date()})
    const { transaction: transactionResponse } = response.data

    setTransactions(previous => [...previous, transactionResponse])
  }

  async function deleteTransaction(transaction: TransactionInput){
    const response = await api.delete('/transactions', { data: transaction})

    const { transactions: transactionResponse } = response.data

    setTransactions(transactionResponse)
  }

  async function updateTransaction(transaction: TransactionUpdateProps){
    const response = await api.put('/transactions', {...transaction, createdAt: new Date()})

    const { transactions: transactionResponse } = response.data

    setTransactions(transactionResponse)
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction, deleteTransaction, updateTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionsContext)

  return context
}