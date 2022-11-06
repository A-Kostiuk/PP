import styled from 'styled-components';
import { Ul } from '../../styled';

export const Nav = styled.nav`
  width: 100%;
`;

export const LinksList = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

