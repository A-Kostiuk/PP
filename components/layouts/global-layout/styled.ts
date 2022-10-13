import styled, { css } from 'styled-components';
import { P } from '../../styled';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({theme}) => theme.pageIndents.mobilePadding};
  min-width: ${({theme}) => theme.viewports.mobileWidth};

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    padding: ${({theme}) => theme.pageIndents.tabletPadding};
    height: 100vh;
  }

  @media (min-width: ${({theme}) => theme.viewports.laptopWidth}) {
    margin: 0 auto;
    padding: ${({theme}) => theme.pageIndents.laptopPadding};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;
  }

  @media (min-width: ${({theme}) => theme.viewports.desktopWidth}) {
    padding: ${({theme}) => theme.pageIndents.desktopPadding};
    max-width: ${({theme}) => theme.viewports.desktopWidth};
    min-height: 900px;
  }
`;

export const Meow = styled(P)`
  font-weight: 500;
  font-size: 44px;
  line-height: 58px;
  margin: 80px 0 10px;
  color: ${({theme}) => theme.colors.text};
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: ${({theme}) => theme.colors.grey200};
  margin-bottom: 60px;
`;


export const Text = styled(P)`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  margin-bottom: 20px;
`;

interface IColumn {
  $isHomePage: boolean;
}

export const LeftColumn = styled.div<IColumn>`

  ${(props) => props.$isHomePage ?
          null : css`
            display: none;
            @media (min-width: ${({theme}) => theme.viewports.laptopWidth}) {
              display: block;
            }
          `};

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    margin: 0 auto;
  }
`;

export const RightColumn = styled.div<IColumn>`

  ${(props) => props.$isHomePage ?
          css`
            display: none;
            @media (min-width: ${({theme}) => theme.viewports.laptopWidth} ) {
              overflow: hidden;
              position: relative;
              display: block;
              height: 100%;
              border-radius: 20px;
              background-color: ${({theme}) => theme.colors.baseWhite}

            };
          ` : css`
            display: flex;
            flex-direction: column;
            gap: 10px;
            height: 100%;
          `
  };
`;

