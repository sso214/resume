import styled, { DefaultTheme } from 'styled-components';

const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`;
export const MOBILE_WIDTH = 640;
export const media = {
  custom: customMediaQuery,
  mobile: customMediaQuery(MOBILE_WIDTH),
};

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
    black: '#fff',
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
  font-size: 16px;
  line-height: 1.8;

  ${media.mobile} {
    font-size: 14px;
  }

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
  padding: 100px 0 50px;
`;
