import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 10px;
  border: none;
  background-color: ${({theme}) => theme.colors.primary};
  text-transform: uppercase;
  border-radius: 10px;
  padding: 12px 30px;
  color: ${({theme}) => theme.colors.secondary};
  font-weight: 500;
  width: 100%;

  svg path {
    fill: ${({theme}) => theme.colors.secondary};
  }

  :hover {
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.baseWhite};

    svg path {
      fill: ${({theme}) => theme.colors.baseWhite};
    }
  }

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    width: auto;
  }
`;
