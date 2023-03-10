import styled from 'styled-components';
import { P } from '../../styled';

export const Form = styled.form`
  background-color: ${({theme}) => theme.colors.appBackground};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 20px;
  }
`;

export const Label = styled(P)`
  padding-left: 10px;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
  color: ${({theme}) => theme.colors.grey200};
  text-transform: uppercase;
`

export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: grid;
    grid-template-columns: 1fr min-content;
    gap: 10px;
  }
`;

export const SubmitButton = styled.button.attrs(() => ({
  type: 'submit',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.primaryBackground};
  min-width: 40px;
  width: 100%;
  height: 40px;
  align-self: end;

  svg path {
    fill: ${({theme}) => theme.colors.secondary};
  }

  &&:hover {
    transition: .2s;
    background-color: ${({theme}) => theme.colors.primary};
  }

  &&:active {
    background-color: ${({theme}) => theme.colors.secondary};

    svg path {
      fill: ${({theme}) => theme.colors.baseWhite};
    }
  }
`;
