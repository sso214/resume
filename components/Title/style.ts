import styled, { css } from 'styled-components';

const TAG_STYLE = {
  h1: css`
    margin-bottom: 40px;
    font-size: 40px;
    line-height: 1.4;
  `,
  h2: css`
    position: relative;
    margin-bottom: 30px;
    padding-left: 20px;

    font-size: 35px;
    line-height: 1.5;

    &:before {
      content: '';
      position: absolute;
      top: 13px;
      left: 0;

      width: 8px;
      height: 30px;
      background: ${({ theme }) => theme.color.main};
    }
  `,
  h3: css`
    margin-bottom: 5px;
    font-size: 25px;
  `,
  h4: css`
    margin-bottom: 5px;
    font-size: 18px;
  `,
};

export const Title = styled.p<{ as: string }>`
  ${(props) => TAG_STYLE[props.as as 'h1' | 'h2' | 'h3' | 'h4']};
  font-weight: 500;
`;
