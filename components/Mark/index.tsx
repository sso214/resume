import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children?: ReactNode;
}

const StyledMark = styled.span`
  margin: 0 5px 20px 0;
  padding: 1px 10px 3px;
  display: inline-block;

  background: ${({ theme }) => theme.color.mark};
  border-radius: 2px;
  font-size: 12px;
  font-weight: bold;
`;

const Mark: React.FC<Props> = ({ children }) => {
  return <StyledMark>{children}</StyledMark>;
};

export default Mark;
