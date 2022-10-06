import styled from 'styled-components';
import { P } from '../../styled';

export const BreedName = styled(P)`
  display: none;
  position: absolute;
  text-align: center;
  color: ${({theme}) => theme.colors.secondary};
  background-color: ${({theme}) => theme.colors.baseWhite};
  padding: 5px 10px;
  border-radius: 10px;
  max-width: 170px;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const StyledLink = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;

  :hover {
    :before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${({theme}) => theme.colors.photoHover}
    }

    ${BreedName} {
      display: block;
    }
  }
}`;
