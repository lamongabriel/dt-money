import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: var(--text-paragraph-color);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tr{
      background-color: var(--primary-shape-color);
      &:hover{
        background-color: #eee;
      }
    }

    td{
      padding: 1rem 2rem;
      border: 0;
      font-weight: 400;
      border-radius: 0.25rem;
      color: var(--text-paragraph-color);

      &:first-of-type{
        color: var(--text-heading-color);
      }

      &.outcome{
        color: var(--primary-red-color);
      }

      &.income{
        color: var(--primary-green-color);
      }

      &:last-of-type{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.3rem;
      }
    }
  }
`

export const OptionsButton = styled.button`
  border: none;
  background-color: transparent;
  transition: transform 200ms;

  display: inline-flex;

  &:hover{
    transform: scale(1.1);
  }
`