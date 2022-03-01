import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    background: #f5f5f5;
    font-size: 1.6rem;
    color: #333;
    font-family: 'Roboto', sans-serif;
  }

`;
