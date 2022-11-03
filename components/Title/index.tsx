import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4';

interface Props {
  heading: HeadingTags;
  children?: ReactNode;
}

const TAG_STYLE = {
  h1: css`
    margin-bottom: 40px;
    font-size: 40px;
    font-weight: 500;
    line-height: 1.4;
  `,
  h2: css`
    position: relative;
    margin-bottom: 30px;
    padding-left: 20px;

    font-size: 35px;
    font-weight: 500;
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
    font-weight: 500;
  `,
  h4: css`
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 500;
  `,
};

export const StyledTitle = styled.p<{ heading: HeadingTags }>`
  ${(props) => TAG_STYLE[props.heading]};
`;

export const Title: React.FC<Props> = ({ heading, children }) => {
  return (
    <StyledTitle as={heading} heading={heading}>
      {children}
    </StyledTitle>
  );
};
