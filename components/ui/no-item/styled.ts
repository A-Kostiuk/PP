import styled from 'styled-components';
import { P } from '../../styled';

export const Text = styled(P)`
  width: 100%;
  padding: 18px 20px;
  background-color: ${({theme}) => theme.colors.appBackground};
  color: ${({theme}) => theme.colors.grey200};
  border-radius: 10px;
`;
