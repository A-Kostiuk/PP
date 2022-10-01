import styled from 'styled-components';
import { Li, P } from '../../styled';

export const StyledVotingLog = styled(Li)`
  display: grid;
  grid-template-columns: 61px 1fr min-content;
  gap: 20px;
  padding: 15px;
  background-color: ${props => props.theme.colors.grey100};
  border-radius: 10px;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;


export const Time = styled(P)`
  padding: 3px 10px;
  background-color: ${props => props.theme.colors.baseWhite};
  border-radius: 5px;
`;

export const Description = styled(P)`
  color: ${props => props.theme.colors.grey200};

  span {
    color: ${({theme}) => theme.colors.baseBlack};
    font-weight: 500;
  }
`;

interface IIcon {
  $iconId: string
}

export const Icon = styled.div<IIcon>`
  svg {
    display: block;
  }

  svg path {
    fill: ${props => {
  switch (props.$iconId) {
    case 'like':
      return props.theme.colors.green100;
    case 'favorite':
      return props.theme.colors.pink100;
    case 'dislike':
      return props.theme.colors.orange100;
    default:
      return props.theme.colors.grey100;
  }
}};
  }
`;
