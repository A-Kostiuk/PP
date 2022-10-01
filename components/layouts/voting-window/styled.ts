import styled from 'styled-components';
import { Ul } from '../../styled';

export const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 20px;
  height: 250px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    height: 360px;
  }
`;

export const VotingActionsList = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  background: ${props => props.theme.colors.baseWhite};
  border: 4px solid #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
  margin: -44px auto 10px;
`;

interface IActionButton {
  $type: string;
}

export const ActionButton = styled.button<IActionButton>`
  border: none;
  padding: 20px;
  cursor: pointer;
  background-color: ${props => {
    switch (props.$type) {
      case 'like':
        return props.theme.colors.green100;
      case 'favorite':
        return props.theme.colors.pink100;
      case 'dislike':
        return props.theme.colors.orange100;
      default:
        return props.theme.colors.baseWhite;
    }
  }};

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    padding: 25px;
  }

  svg {
    display: block;
    width: 20px;
    height: 20px;

    @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
      width: 30px;
      height: 30px;
    }
  }

  svg path {
    fill: ${props => props.theme.colors.baseWhite};
  }
`;
