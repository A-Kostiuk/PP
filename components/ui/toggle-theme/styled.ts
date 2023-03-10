import styled from 'styled-components';

interface State {
  $isDarkMode: boolean;
}

export const Label = styled.label<State>`
  display: block;
  width: 50px;
  padding: 5px;
  height: 25px;
  background-color: ${(props) => props.$isDarkMode ? props.theme.colors.baseWhite : props.theme.colors.baseBlack};
  border-radius: 25px;
  position: relative;
`;

export const Ball = styled.div<State>`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.$isDarkMode ? props.theme.colors.baseBlack : props.theme.colors.baseWhite};
  border-radius: 50%;
  transition: transform 0.2s linear;
`;

export const Checkbox = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Label} ${Ball} {
    transform: translateX(24px);
  }
`;
