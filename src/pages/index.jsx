// React/Next Components
import Head from 'next/head';

// Hooks
import useTranslation from '../hooks/useTranslation';

// Components
import Header from '../containers/HomePage/Header';
import Presentation from '../containers/HomePage/Presentation';

// Contents
const homeContent = {
  'pt-BR': {
    pageTitle: 'Página Inicial',
  },
  'en-US': {
    pageTitle: 'Home Page',
  },
};

function HomePage() {
  const translate = useTranslation(homeContent);

  return (
    <>
      <Head>
        <title>{translate('pageTitle')}</title>
      </Head>
      <main>
        <Header />
        <Presentation />
      </main>
    </>
  );
}

export default HomePage;
