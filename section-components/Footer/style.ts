import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8em;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;
