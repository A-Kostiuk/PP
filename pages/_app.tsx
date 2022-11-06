import Head from 'next/head';
import type { AppProps } from 'next/app';
import { FC, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import useDarkMode from 'use-dark-mode';

import { GlobalStyles } from '../styles/global';
import { wrapper } from '../store';
import { darkTheme } from '../theme/dark';
import { lightTheme } from '../theme/light';
import { Provider } from 'react-redux';
import { CacheProvider } from '@emotion/react';

const App: FC<AppProps> = ({Component, ...rest}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const {store, props} = wrapper.useWrappedStore(rest);
  const {emotionCache, pageProps} = props;

  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <>
      <Head>
        <title>PetProject</title>
      </Head>
      <Provider store={store}>
        {/*<CacheProvider value={emotionCache}>*/}
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Normalize />
            {/*{isMounted && <Component {...pageProps} />}*/}
            <Component {...pageProps} />
          </ThemeProvider>
        {/*</CacheProvider>*/}
      </Provider>
    </>);
};

export default App;
