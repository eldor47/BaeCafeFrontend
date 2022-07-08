import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Web3ReactProvider } from '@web3-react/core'

import 'styles/globals.css'
import { light } from 'styles/theme';
import GlobalStyle from 'styles/globals';
import Web3ReactManager from 'components/Web3Manager';
import getLibrary from 'components/connectors/getLibrary';

function MyApp({ Component, pageProps }: AppProps) {
  const [mountedComponent, setMountedComponent] = useState(false);

  useEffect(() => {
    setMountedComponent(true);
  }, []);

  if (!mountedComponent) {
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#ece5db',
        justifyContent: 'center',
        display: 'flex',
      }}></div>;
  }

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ReactManager>
        <ThemeProvider theme={light}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
        </Web3ReactManager>
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
