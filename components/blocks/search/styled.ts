import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  order: 1;
  grid-column: 1 / -1;
  min-width: 200px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    order: 0;
    flex-grow: 1;
  }
`;

export const SearchField = styled.input`
  width: 100%;
  border: none;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.primaryBackground};
  color: ${props => props.theme.colors.text};
  padding: 15px 60px 15px 20px;
  font-size: 20px;
  line-height: 30px;

  :hover {
    border: 2px solid ${props => props.theme.colors.primary};
    padding: 13px 58px 13px 18px;
  }

  :focus {
    border: 2px solid ${props => props.theme.colors.secondary};
    padding: 13px 58px 13px 18px;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  background-color: ${({theme}) => theme.colors.btnBackground};
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  top: 10px;
  right: 10px;

  svg {
    display: block;
  }

  &:hover {
    transition: 0.3s;
    transform: scale(1.15);
  }

  &:active {
    background-color: ${({theme}) => theme.colors.secondary};

    svg path {
      fill: ${({theme}) => theme.colors.baseWhite};
    }
  }
`;
