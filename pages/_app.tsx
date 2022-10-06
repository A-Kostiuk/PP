import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Provider } from 'react-redux';
import useDarkMode from 'use-dark-mode';

import { GlobalStyles } from '../styles/global';
import { store, wrapper } from '../store';
import { darkTheme } from '../theme/dark';
import { lightTheme } from '../theme/light';

function App({Component, pageProps}: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>PetProject</title>
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Normalize />
          {isMounted && <Component {...pageProps} />}
        </ThemeProvider>
      </Provider>
    </>);
}

export default wrapper.withRedux(App);
