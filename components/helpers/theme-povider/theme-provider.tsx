import React, { FC, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { darkTheme } from '../../../theme/dark';
import { lightTheme } from '../../../theme/light';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../../styles/global';
import { Normalize } from 'styled-normalize';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: FC<Props> = ({children}) => {
  const {resolvedTheme} = useTheme();
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    resolvedTheme === 'light'
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme);
  }, [resolvedTheme]);

  return (
    <SCThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Normalize />
      {children}
    </SCThemeProvider>
  );
};

export default ThemeProvider;
