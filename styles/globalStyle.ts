import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  :focus {
    outline: none;
    border: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 10px;
    -webkit-text-size-adjust: none;
    font-display: fallback;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    body {
      margin: 0;
      white-space: pre-line;
    }

    a {
      text-decoration: underline;
      transition: color .2s ease-in-out;
    }
  }
`;
