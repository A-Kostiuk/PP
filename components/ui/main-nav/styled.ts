import styled from 'styled-components';
import { Ul, Li } from '../../styled';

export const LinksList = styled(Ul)`
  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const NavItem = styled(Li)`
  :not(:nth-child(3n)) {
    margin-bottom: 20px;
  }

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    margin-bottom: 0;
    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;
