import useData from '../../hooks/useData';
import * as S from './style';

const Footer = () => {
  const { copyright } = useData();
  return <S.Footer>{copyright}</S.Footer>;
};

export default Footer;
