import styled, { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  color: {
    black: '#252525',
    white: '#c6c6c6',
    main: '#7ac294',
    mainHover: '#c1e6ce',
    mark: '#484848',
    markLine: '#999',
    line: '#555',
  },
};

export const lightTheme: DefaultTheme = {
  color: {
    black: '#dcdcdc',
    white: '#222',
    main: '#7ac294',
    mainHover: '#c1e6ce',
    mark: '#eee',
    markLine: '#999',
    line: '#e3e3e3',
  },
};

export const WrapContainer = styled.div`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.black};

  a {
    color: ${({ theme }) => theme.color.main};
    text-decoration: underline;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.color.main};
    }
  }
`;

export const ContentsContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0;

  font-size: 16px;
  line-height: 1.8;
`;
