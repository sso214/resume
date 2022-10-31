import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4';

interface Props {
  heading: HeadingTags;
  children?: ReactNode;
}

const TAG_STYLE = {
  h1: css`
    font-size: 40px;
    line-height: 1.4;
    margin-bottom: 40px;
  `,
  h2: css`
    font-size: 35px;
    line-height: 1.5;
    margin-bottom: 30px;
    position: relative;
    padding-left: 20px;

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
    font-size: 25px;
    margin-bottom: 5px;
  `,
  h4: css`
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: bold;
  `,
};

const StyledTitle = styled.p<{ heading: HeadingTags }>`
  ${(props) => TAG_STYLE[props.heading]};
`;

const Title: React.FC<Props> = ({ heading, children }) => {
  return (
    <StyledTitle as={heading} heading={heading}>
      {children}
    </StyledTitle>
  );
};

export default Title;
