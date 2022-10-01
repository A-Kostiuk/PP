import styled from 'styled-components';

export const Form = styled.form`
  background-color: ${({theme}) => theme.colors.appBackground};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 20px;
  }
`;

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
