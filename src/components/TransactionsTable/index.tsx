import { useTransactions } from "../../hooks/useTransactions";

import { Container, OptionsButton } from "./styles";
import { Trash, SquareHalf } from 'phosphor-react';
import { convertToMoney } from "../../utils/convertToMoney";
import { convertToDate } from "../../utils/convertToDate";
import React from "react";
import { ModalNewTransaction } from "../ModalNewTransaction";

export function TransactionsTable(){

  const {transactions, deleteTransaction} = useTransactions()

  async function handleDelete(e:React.MouseEvent<HTMLElement>){
    const currentTransaction = transactions.find(transaction => transaction.id === e.currentTarget.parentElement?.parentElement?.dataset.id)
    if(currentTransaction){
      if(window.confirm(`Are you sure you want to delete ${currentTransaction.name}?`))
        await deleteTransaction(currentTransaction)
    }
  }

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Data</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(transaction => (
                <tr data-id={transaction.id} key={transaction.id}>
                  <td>
                    {transaction.name}
                  </td>
                  <td className={transaction.type}>
                    {convertToMoney(transaction.price)}
                  </td>
                  <td>
                    {transaction.category}
                  </td> 
                  <td>
                    {convertToDate(new Date(transaction.createdAt))}
                  </td>
                  <td>
                    <OptionsButton onClick={handleDelete}>
                      <Trash size={28} color="#969CB2" />
                    </OptionsButton>
                    <OptionsButton>
                      <ModalNewTransaction 
                        transactionToUpdate={
                          {
                            id: transaction.id,
                            name: transaction.name,
                            price: transaction.price,
                            type: transaction.type,
                            category: transaction.category,
                          }
                        }
                      >
                        <SquareHalf size={28} color="#969CB2" />
                      </ModalNewTransaction>
                    </OptionsButton>
                  </td>
                </tr>
              )
            )
          }
        </tbody>

      </table>
    </Container>
  )
}