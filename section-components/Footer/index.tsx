import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

const Footer = () => {
  return <StyledFooter>Website made by SSO</StyledFooter>;
};

export default Footer;
