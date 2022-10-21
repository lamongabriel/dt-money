import { Sun, Moon } from 'phosphor-react'

import logoDTMoney from '../../assets/logo.svg'
import { Container, Content } from './styles'
import { ModalNewTransaction } from '../ModalNewTransaction'

interface HeaderProps{
  toggleTheme: () => void
  currentTheme: string
}

export function Header({ toggleTheme, currentTheme }:HeaderProps){
  return(
    <Container>
      <Content>
        <img src={logoDTMoney} alt="dt money logo" />
        <div className="header__options">
          <ModalNewTransaction>
            <button>Create new</button>
          </ModalNewTransaction>
          <button type="button" className="button__darkmode" onClick={toggleTheme}>
            {currentTheme === 'light' ? <Sun size={32} /> : <Moon size={32} />}
          </button>
        </div>
      </Content>
    </Container>
  )
}