import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html,body, #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body, input, button {
    font-size: 1.6rem; // 16px
    font-family: ${({ theme }) => theme.font.family.default};
  }

  a {
      text-decoration: none;
    }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
