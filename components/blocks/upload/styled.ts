import styled from 'styled-components';
import { P } from '../../styled';

export const OpeningButton = styled.button`
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

export const UploadMenu = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: ${({theme}) => theme.colors.appBackground};
  color: ${({theme}) => theme.colors.grey200};
  border-radius: 20px;

`;

export const Title = styled.h2`
  text-align: center;
  margin: 20px 0 10px;
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
  color: ${({theme}) => theme.colors.text};

`;

export const Text = styled(P)`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 40px;
`;

export const Link = styled.a`
  color: ${({theme}) => theme.colors.secondary};
`;

export const Blur = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(29, 29, 29, 0.6);
`;
