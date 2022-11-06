import type { AppProps } from 'next/app';
import { useState } from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyle';
import { darkTheme, lightTheme } from '../styles/theme';

const ThemeToggleButton = styled.div<{ isDark: boolean }>`
  position: fixed;
  top: 2em;
  right: 2em;

  color: ${({ theme }) => theme.color.white};
  font-size: 1.1em;
  cursor: pointer;

  z-index: 100;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.main};
    transition: 0.3s;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const isDarkTheme = theme === 'dark';
  const handleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <>
      <Head>
        <title>박소영 Frontend Developer</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <ThemeToggleButton onClick={handleTheme} isDark={isDarkTheme}>
          {isDarkTheme ? 'LIGHT MODE' : 'DARK MODE'}
        </ThemeToggleButton>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
