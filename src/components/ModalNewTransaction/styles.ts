import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import { transparentize } from 'polished'

export const NewTransactionOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const NewTransactionContent = styled(Dialog.Content)`
  border-radius: 0.25rem;
  background-color: var(--background-color);
  padding: 4rem 3rem;
  width: 100%;
  max-width: 576px;
  position: relative;

  h2{
    margin-bottom: 2rem;
  }

  .close{
    position: absolute;
    border: none;
    background-color: transparent;
    top: 1.5rem;
    right: 1.5rem;
    transition: transform 200ms;
    &:hover{
      transform: scale(1.2);
    }
  }

  form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    
    input{
      width: 100%;
      height: 4rem;
      border-radius: 0.25rem;
      padding: 0 1.5rem;

      border: solid 1px var(--input-border-color);
      background-color: var(--input-background-color);
      color: var(--text-heading-color);
    }

    button[type="submit"]{
      background-color: var(--primary-green-color);
      color: var(--text-button-color);
      width: 100%;
      height: 4rem;
      border: none;
      border-radius: 0.25rem;
      transition: 200ms ease-in-out;
      font-weight: 600;

      &:hover{
        filter: brightness(1.1);
        transform: scale(1.05);
      }
    }
  }
`

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  width: 100%;

`

interface RadioBoxProps {
  isActive: boolean
  activeColor: string
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: solid 1px #D7D7D7;
  border-radius: 4px;
  transition: transform 200ms;

  background-color: ${(props) => props.isActive ? transparentize(0.8, props.activeColor) : 'transparent'};

  span{
    display: inline-block;
    font-size: 1rem;
    color: var(--text-heading-color);
  }

  &:hover{
    font-weight: 500;
  }
`