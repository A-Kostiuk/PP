import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  color: ${({theme}) => theme.colors.text};
  padding: 5px 20px;
  background-color: ${({theme}) => theme.colors.btnBackground};
  cursor: pointer;
`;
