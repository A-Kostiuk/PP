import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  color: ${({theme}) => theme.colors.text};
  padding: 5px 20px;
  background-color: ${({theme}) => theme.colors.btnBackground};
  cursor: pointer;
  min-width: 120px;
  border-radius: 10px;
  color: ${({theme}) => theme.colors.secondary};
  transition: .2s;

  &:hover {
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.baseWhite};
  }

  &:disabled {
    background-color: ${({theme}) => theme.colors.grey200};
    color: ${({theme}) => theme.colors.text};
    opacity: .4;
  }
`;
