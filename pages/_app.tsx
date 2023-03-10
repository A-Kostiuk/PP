import Head from 'next/head';
import type { AppProps } from 'next/app';
import { FC } from 'react';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import ThemeProvider from '../components/helpers/theme-povider/theme-provider';

import { wrapper } from '../store';
import { Provider } from 'react-redux';

const App: FC<AppProps> = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <title>PetProject</title>
      </Head>
      <Provider store={store}>
        <NextThemeProvider>
          <ThemeProvider>
            <Component {...props.pageProps} />
          </ThemeProvider>
        </NextThemeProvider>
      </Provider>
    </>);
};

export default App;
