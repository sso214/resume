import styled from 'styled-components';

export const Mark = styled.span`
  margin: 0 5px 20px 0;
  padding: 1px 10px 3px;
  display: inline-block;

  background: ${({ theme }) => theme.color.mark};
  border-radius: 2px;
  font-size: 0.8em;
`;
