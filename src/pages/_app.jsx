// React/Next Components
import React from 'react';
import Head from 'next/head';

// Components Context
import { NavbarContextProvider } from '../contexts/NavbarContext';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import { LocaleContextProvider } from '../contexts/LocaleContext';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WithTheme from '../hocs/WithTheme';

// Styles
import '../styles/main.scss';

// Assets
import favicon from '../public/icons/favicon.ico';

const MyApp = ({ Component, pageProps }) => {
  return (
    <LocaleContextProvider>
      <ThemeContextProvider>
        <NavbarContextProvider>
          <Head>
            <link rel="shortcut icon" href={favicon} />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <WithTheme>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </WithTheme>
        </NavbarContextProvider>
      </ThemeContextProvider>
    </LocaleContextProvider>
  );
};

export default MyApp;
