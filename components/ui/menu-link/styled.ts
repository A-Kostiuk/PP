import styled, { css } from 'styled-components';

interface INavLink {
  $isCurrent: boolean;
}

export const NavLink = styled.a<INavLink>`
  cursor: pointer;
  display: block;
  padding: 15px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.linkBackground};
  transition: .2s;

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

  ${props => props.$isCurrent ? css`
    cursor: auto;
    background-color: ${({theme}) => theme.colors.secondary};

    svg path {
      fill: ${props => props.theme.colors.baseWhite};
    }

    :hover {
      background-color: ${({theme}) => theme.colors.secondary};
    }
  ` : null}
`;
