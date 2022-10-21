import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
    color: var(--text-heading-color);
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }

  button{
    cursor: pointer;
  }

  body{
    background-color: var(--background-color);
    -webkit-font-smoothing: antialiased;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const LightTheme = createGlobalStyle`
  :root{
    --background-color: #F0F2F5;
    --text-paragraph-color: #969CB2;
    --text-heading-color: #363F5F;
    --text-button-color: #ffffff;
    --primary-shape-color: #FFFFFF;
    --input-background-color: #E7E9EE;
    --input-border-color: #D7D7D7;
    --hover-color: #eee;

    --primary-red-color: #E52E4D;

    --primary-green-color: #33CC95;
    
    --primary-blue-color: #5429CC;
    --secondary-blue-color: #6933ff;
  }
`

export const DarkTheme = createGlobalStyle`
  :root{
    --background-color: #121214;
    --text-paragraph-color: #ffffff;
    --text-heading-color: #ffffff;
    --text-button-color: #ffffff;
    --primary-shape-color: #202024;
    --input-background-color: #202024;
    --hover-color: #555;

    --primary-red-color: #E52E4D;

    --primary-green-color: #33CC95;
    
    --primary-blue-color: #5429CC;
    --secondary-blue-color: #6933ff;
  }
`