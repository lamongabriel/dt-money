import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  @media(max-width: 700px){
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

interface ContainerItemProps {
  backgroundColor?: string
}

export const ContainerItem = styled.div<ContainerItemProps>`
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'var(--primary-shape-color)'};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: ${(props) => props.backgroundColor ? '#ffffff' : 'var(--text-heading-color)'};
  transition: transform 200ms;

  &:hover{
    transform: scale(1.05);
    cursor: pointer;
  }

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong{
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
    color: ${(props) => props.backgroundColor ? '#ffffff' : 'var(--text-heading-color)'};
  }

  .outcome{
    color: var(--primary-red-color)
  }
`