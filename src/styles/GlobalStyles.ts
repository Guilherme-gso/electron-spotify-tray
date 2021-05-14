import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #191919;
    color: #ddd;
    box-shadow: none;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`;