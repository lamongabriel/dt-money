import React from 'react'
import { useTransactions } from '../../hooks/useTransactions'

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { Container, ContainerItem } from './styles'
import { convertToMoney } from '../../utils/convertToMoney'

export function Summary(){

  const { transactions  } = useTransactions()

  const expenses = transactions.reduce((acc, cur) => {
    if(cur.type === 'income'){
      acc.income += cur.price
      acc.total += cur.price
    } else{
      acc.outcome -= cur.price
      acc.total -= cur.price
    }
    return acc
    }, 
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  )

  function copyToClipBoard(event:React.MouseEvent<HTMLElement>){
    try{
      if(event.currentTarget.dataset.type === 'income'){
        navigator.clipboard.writeText(`Incomes: ${expenses.income}`)
          .then(sucess => alert('Total incomes copied to clipboard'))
      }
      else if (event.currentTarget.dataset.type === 'outcome'){
        navigator.clipboard.writeText(`Outcomes: ${expenses.outcome}`)
          .then(sucess => alert('Total expenses copied to clipboard'))
      }
      else{
        navigator.clipboard.writeText(`Incomes: ${expenses.income}\nOutcomes: ${expenses.outcome}\nTotal:${expenses.total}`)
          .then(sucess => alert('All expenses copied to clipboard'))
      }
    } catch(error){
      alert('Could not copy to clipboard!')
    }
  }

  return(
    <Container>
      <ContainerItem onClick={copyToClipBoard} data-type="income">
        <header>
          <p>Incomes</p>
          <ArrowCircleUp color="#33CC95" size={32} alt="Incomes icon" />
        </header>
        <strong>{convertToMoney(expenses.income)}</strong>
      </ContainerItem>

      <ContainerItem onClick={copyToClipBoard} data-type="outcome">
        <header>
          <p>Outcomes</p>
          <ArrowCircleDown color="#E52E4D" size={32} alt="Outcomes icon" />
        </header>
        <strong className='outcome'>{convertToMoney(expenses.outcome)}</strong>
      </ContainerItem>

      <ContainerItem backgroundColor='#33CC95' onClick={copyToClipBoard} data-type="total">
        <header>
          <p>Total</p>
          <CurrencyDollar color='#fff' size={32} alt="Dollar icon" />
        </header>
        <strong>{convertToMoney(expenses.total)}</strong>
      </ContainerItem>
    </Container>
  )
}