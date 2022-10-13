import styled from 'styled-components';

interface ILoader {
  $mobileHeight?: number;
  $tabletHeight?: number;
}

export const StyledLoader = styled.div<ILoader>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({$mobileHeight}) => $mobileHeight ? `${$mobileHeight}px` : '250px'};

  svg {
    width: 50%;
    height: 50%;
  }

  svg circle {
    fill: ${({theme}) => theme.colors.secondary};
  }

  svg stop {
    stop-color: ${({theme}) => theme.colors.secondary};
  }

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    height: ${({$tabletHeight}) => $tabletHeight ? `${$tabletHeight}px` : '360px'};
  }
`;
