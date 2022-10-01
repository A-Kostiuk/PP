import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
