import React, { ReactNode } from 'react';
import * as S from './style';

interface Props {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
