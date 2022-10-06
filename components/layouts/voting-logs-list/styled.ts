import styled from 'styled-components';
import { Li, Ul } from '../../styled';

export const LogsList = styled(Ul)`

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  flex: auto;
`;

export const NoLogs = styled(Li)`
  color: ${({theme}) => theme.colors.text};
  font-weight: 500;
  padding: 15px;
  background-color: ${props => props.theme.colors.votingLogBg};
  border-radius: 10px;
`;

