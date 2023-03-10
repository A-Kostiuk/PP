import styled, { css } from 'styled-components';
import { P } from '../../styled';
import Link from 'next/link';

export const Title = styled(P)`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.linkBackground};
`;

interface ICard {
  $image: string;
  $title: string;
  $isActive: boolean;
}

export const Card = styled.a<ICard>`
  cursor: pointer;


  :hover ${Title} {
    background-color: ${props => props.theme.colors.primary};
    transition: .2s;
  }

  :active ${Title} {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.baseWhite};
  }

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    ::before {
      content: '';
      display: block;
      width: 134px;
      height: 200px;
      background-image: url(${props => props.$image});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      margin-bottom: 10px;
      border: 4px solid rgba(255, 255, 255, 0.6);
      border-radius: 20px;
      background-color: ${props => {
        switch (props.$title) {
          case 'Voting':
            return props.theme.colors.purple100;
          case 'Breeds':
            return props.theme.colors.green100;
          case 'Gallery':
            return props.theme.colors.orange100;
          default:
            return props.theme.colors.baseWhite;
        }
      }};
    }

    :hover::before {
      border: 4px solid #FFFFFF;
    }

    :active::before {
      border: 4px solid #FBE0DC;
    }
  }
  ${props => props.$isActive ? css`
    cursor: auto;

    ::before, :hover::before {
      border: 4px solid #FBE0DC;
    }

    ${Title}, :hover ${Title} {
      background-color: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.baseWhite};
    }
  ` : null
  };
`;
