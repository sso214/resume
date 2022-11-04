import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      black: string;
      white: string;
      main: string;
      mainHover: string;
      mark: string;
      markLine: string;
      line: string;
    };
  }
}
