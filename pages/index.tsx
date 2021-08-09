
import React, { useContext } from 'react';
import Head from 'next/head';
import { Layout } from '../components/Layouts/Layout';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LangContext } from '../context/langContext';


export default function Home() {


  return (
    <>

      <Head>
        <title>
          Reynaldo Larz
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet" />


      </Head>
      <div>
        <Layout>

        </Layout>
      </div>

    </>

  )
}
