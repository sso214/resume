import styled, { css } from 'styled-components';
import { HeadingTags } from './index';

const TAG_STYLE = {
  h1: css`
    margin-bottom: 40px;
    font-size: 2.5em;
    line-height: 1.4;
  `,
  h2: css`
    position: relative;
    margin-bottom: 30px;
    padding-left: 20px;

    font-size: 2.2em;
    line-height: 1.5;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-45%);

      width: 8px;
      height: 28px;
      background: ${({ theme }) => theme.color.main};
    }
  `,
  h3: css`
    font-size: 1.6em;
  `,
  h4: css`
    margin-bottom: 5px;
    font-size: 1.2em;
  `,
};

export const Title = styled.p<{ as: HeadingTags }>`
  ${(props) => TAG_STYLE[props.as]};
  font-weight: 500;
`;
