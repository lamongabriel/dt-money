import { ChangeEvent, FormEvent, ReactNode, useState } from 'react';
import { TransactionUpdateProps, useTransactions } from '../../hooks/useTransactions';

import * as Dialog from '@radix-ui/react-dialog';
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { NewTransactionOverlay, NewTransactionContent, TransactionTypeContainer, RadioBox } from './styles';

import CurrencyInput from 'react-currency-input-field';

interface ModalNewTransactionProps{
  children?: ReactNode
  transactionToUpdate?: TransactionUpdateProps
}

export function ModalNewTransaction({children, transactionToUpdate}:ModalNewTransactionProps){

  const [ type, setType ] = useState(transactionToUpdate ? transactionToUpdate.type : 'income')
  const [ modalNewTransactionIsOpen, setModalNewTransactionIsOpen ] = useState(false)
  const { createTransaction, updateTransaction } = useTransactions()

  const [formData, setFormData] = useState(transactionToUpdate ? 
    {
      name: transactionToUpdate.name,
      price: transactionToUpdate.price,
      category: transactionToUpdate.category
    } : 
    {
      name: '',
      price: 0,
      category: ''
    }
  )

  function handleInput(e:ChangeEvent<HTMLInputElement>){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function handleCreateNewTransaction(e:FormEvent){
    e.preventDefault()

    if(transactionToUpdate){

      await updateTransaction({
        id: transactionToUpdate?.id,
        name: formData.name,
        type: type,
        category: formData.category,
        price: Number(formData.price)
      })

    } else{

      await createTransaction({
        name: formData.name,
        type: type,
        category: formData.category,
        price: Number(formData.price)
      })

    }

    setModalNewTransactionIsOpen(false)
    if(!transactionToUpdate)
      resetNewTransactionModal()
  }

  function resetNewTransactionModal(){
    setFormData({
      name: '',
      price: 0,
      category: ''
    })
    setType('income')
  }

  return(
    <Dialog.Root open={modalNewTransactionIsOpen} onOpenChange={setModalNewTransactionIsOpen}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <NewTransactionOverlay>
          <NewTransactionContent>
            <Dialog.Close className='close'><X size={20} color="#A8A8B3" weight='bold' /></Dialog.Close>
            <h2>{transactionToUpdate ? `Update transaction: ${transactionToUpdate.name}` : 'Create transaction'}</h2>
            <form onSubmit={handleCreateNewTransaction}>

              <input 
                type="text" 
                placeholder="Name..."
                required
                name="name"
                value={formData.name}
                onChange={handleInput}
              />

              <CurrencyInput
                name="price"
                placeholder="Price..."
                required
                prefix="$"
                value={formData.price}
                decimalsLimit={2}
                onValueChange={(value, name) => {handleInput({target: {name, value}} as ChangeEvent<HTMLInputElement>)}}
                allowNegativeValue={false}
              />

              <TransactionTypeContainer>
                <RadioBox 
                  type="button"
                  isActive={type === 'income'}
                  onClick={() => {setType('income')}}
                  activeColor="#33CC95"
                >
                  <ArrowCircleUp color='#33CC95' size={24} />
                  <span>Income</span>
                </RadioBox>
              
                <RadioBox 
                  type='button'
                  isActive={type === 'outcome'}
                  onClick={() => {setType('outcome')}}
                  activeColor="#E52E4D"
                >
                  <ArrowCircleDown color='#E52E4D' size={24} />
                  <span>Outcome</span>
                </RadioBox>
              </TransactionTypeContainer>

              <input 
                type="text" 
                name="category"
                placeholder="Category..." 
                required 
                value={formData.category}
                onChange={handleInput}
              />

              <button type='submit'>{transactionToUpdate ? 'Update' : 'Create'}</button>
            </form>
          </NewTransactionContent>
        </NewTransactionOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}