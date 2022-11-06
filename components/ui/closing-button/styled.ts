import styled from 'styled-components';

interface IClosingButton {
  $btnSize: number;
  $imgSize: number;
}

export const ClosingButtonStyled = styled.button<IClosingButton>`
  border: none;
  cursor: pointer;
  width: ${(props) => `${props.$btnSize}px`};
  height: ${(props) => `${props.$btnSize}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primaryBackground};
  border-radius: ${(props) => `${props.$btnSize / 3}px`};
  margin-left: auto;
  transition: .3s;

  svg {
    width: ${(props) => `${props.$imgSize}px`};
    height: ${(props) => `${props.$imgSize}px`};
  }

  svg path {
    fill: ${({theme}) => theme.colors.secondary};
  }

  :hover {
    background-color: ${({theme}) => theme.colors.primary};
  }

  :active {
    background-color: ${({theme}) => theme.colors.secondary};

    svg path {
      fill: ${({theme}) => theme.colors.baseWhite};
    }
  }
`;
