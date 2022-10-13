import styled from 'styled-components';

export const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const DisplayPanel = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 10px;
`;

export const Pagination = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
