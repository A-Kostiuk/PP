import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme.colors.appBackground};
    font-family: ${({theme}) => theme.font.fontFamily}, 'Arial', sans-serif;
    font-size: ${({theme}) => theme.font.fontSize};
    font-weight: ${({theme}) => theme.font.fontWeight};
    line-height: ${({theme}) => theme.font.lineHeight};
    color: ${({theme}) => theme.colors.text};
  }

  *, ::before, ::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;
