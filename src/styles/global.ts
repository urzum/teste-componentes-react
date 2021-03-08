import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  body {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
        height: 100%;
    }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 14px
  }

  button {
        cursor: pointer;
    }

`;
