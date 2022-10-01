import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 10px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
