import styled from 'styled-components';
import { P } from '../../styled';

export const Label = styled(P)`
  padding-left: 10px;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  color: ${({theme}) => theme.colors.grey200};
  text-transform: uppercase;
`;
