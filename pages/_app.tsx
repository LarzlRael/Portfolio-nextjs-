import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react';
import { IntlProvider } from 'react-intl';
import { LangProvider } from '../context/langContext';


const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider >
  )
}

export default MyApp;