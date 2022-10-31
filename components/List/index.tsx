import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children?: ReactNode;
}

const StyledList = styled.ul`
  li li {
    position: relative;
    padding-left: 15px;
    margin-bottom: 8px;

    &:before {
      content: '';
      position: absolute;
      top: 12px;
      left: 0;

      display: block;
      width: 5px;
      height: 5px;
      background: ${({ theme }) => theme.color.main};
    }
  }
`;

const List: React.FC<Props> = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default List;
