import React, { ReactNode } from 'react';
import * as S from './style';

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4';

interface Props {
  heading: HeadingTags;
  children: ReactNode;
}

const Title: React.FC<Props> = ({ heading, children }) => {
  return <S.Title as={heading}>{children}</S.Title>;
};

export default Title;
