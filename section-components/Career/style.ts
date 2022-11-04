import styled from 'styled-components';
import { List } from '../../components/List/style';

export const CareerList = styled(List)`
  margin-top: 50px;
  border-left: 1px solid ${({ theme }) => theme.color.main};

  h4 {
    margin: 20px 0 10px 0;
  }

  & > li {
    position: relative;
    padding-left: 40px;
    margin-bottom: 50px;

    &:before {
      content: '';
      position: absolute;
      top: 14px;
      left: -10px;

      display: block;
      width: 20px;
      height: 20px;

      border-radius: 50%;
      background: ${({ theme }) => theme.color.main};
      transition: background-color 0.2s ease-in-out;
    }

    &:hover:before {
      background: ${({ theme }) => theme.color.mainHover};
    }

    &:after {
      content: '';
      position: absolute;
      top: 10px;
      left: -14px;

      display: block;
      width: 24px;
      height: 24px;

      border-radius: 50%;
      border: 2px dotted ${({ theme }) => theme.color.main};
      transition: all 0.2s ease-in-out;
    }

    &:hover:after {
      transform: rotate(360deg);
    }

    & > span {
      margin-bottom: 10px;
    }

    div span {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.color.markLine};
    }
  }
`;
