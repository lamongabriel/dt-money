import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--primary-blue-color);
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  background-color: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 1rem 10rem;
  
  .header__options{
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button{
    font-size: 1rem;
    color: var(--text-button-color);
    background-color: var(--secondary-blue-color);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: 200ms;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    &:hover{
      transform: scale(1.1);
      filter: brightness(1.05);
    }

    &.button__darkmode{
      display: inline-flex;
      align-items: center;
      overflow: hidden;
    }
  }
`