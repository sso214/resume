import React, { ReactNode } from 'react';
import * as S from './style';

interface Props {
  children: ReactNode;
}

const Mark: React.FC<Props> = ({ children }) => {
  return <S.Mark>{children}</S.Mark>;
};

export default Mark;
