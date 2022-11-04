import React, { ReactNode } from 'react';
import * as S from './style';

interface Props {
  children: ReactNode;
}

const List: React.FC<Props> = ({ children }) => {
  return <S.List>{children}</S.List>;
};

export default List;
