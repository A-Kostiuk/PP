import styled from 'styled-components';

export const OpeningButton = styled.button`
  display: block;
  position: relative;
  width: 60px;
  height: 60px;
  background-color: ${({theme}) => theme.colors.primaryBackground};
  border: none;
  cursor: pointer;
  border-radius: 20px;
  transition: .3s;

  &&:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: ${({theme}) => theme.colors.primary};
    top: 21px;
    left: 15px;
    box-shadow: 0 8px 0 0 ${({theme}) => theme.colors.primary}, 0 16px 0 0 ${({theme}) => theme.colors.primary};
  }

  :hover {
    background-color: ${({theme}) => theme.colors.primary};
  }

  :hover:before {
    background-color: ${({theme}) => theme.colors.secondary};
    box-shadow: 0 8px 0 0 ${({theme}) => theme.colors.secondary}, 0 16px 0 0 ${({theme}) => theme.colors.secondary};
  }

  :active {
    background-color: ${({theme}) => theme.colors.secondary};
  }

  :active:before {
    background-color: ${({theme}) => theme.colors.baseWhite};
    box-shadow: 0 8px 0 0 ${({theme}) => theme.colors.baseWhite}, 0 16px 0 0 ${({theme}) => theme.colors.baseWhite};
  }

  @media (min-width: ${props => props.theme.viewports.laptopWidth}) {
    display: none;
  }
`;

export const OpenedMenu = styled.div`
  position: fixed;
  padding: 30px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${({theme}) => theme.colors.appBackground};
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${props => props.theme.viewports.laptopWidth}) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
