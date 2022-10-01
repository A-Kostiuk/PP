import styled from 'styled-components';

export const SortButtonStyled = styled.button`
  border: none;
  cursor: pointer;
  padding: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.grey100};

  :hover {
    border: 2px solid ${({theme}) => theme.colors.primary};

    svg path {
      fill: ${props => props.theme.colors.secondary};
    }
  }
`;
