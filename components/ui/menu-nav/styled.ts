import styled from 'styled-components';
import { Ul } from '../../styled';

export const NavList = styled(Ul)`
  justify-self: end;
  display: flex;
  gap: 10px;
`;

export const NavLink = styled.a`
  display: block;
  padding: 15px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.primaryBackground};

  svg {
    display: block;
    width: 30px;
    height: 30px;

    path {
      fill: ${props => props.theme.colors.secondary};
    }
  }

  :hover {
    background-color: ${({theme}) => theme.colors.primary};
  }

  :active {
    background-color: ${({theme}) => theme.colors.secondary};

    svg path {
      fill: ${props => props.theme.colors.baseWhite};
    }
  }
`;
