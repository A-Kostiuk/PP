import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/light';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from '../styles/global';
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>PetProject</title>
      </Head>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Normalize />
        <Component {...pageProps} />
      </ThemeProvider>
    </>);
}

export default MyApp;
