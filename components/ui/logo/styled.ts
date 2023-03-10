import styled from 'styled-components';
import { P } from '../../styled';

export const StyledLogo = styled.a`
  display: flex;
  width: max-content;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled.div`
  margin-right: 8px;

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: ${({theme}) => theme.colors.text};
    }
  }
`;

export const Text = styled(P)`
  font-weight: 700;
  font-size: 16px;
  color: ${({theme}) => theme.colors.text};
`;
