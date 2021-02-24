// React/Next Components
import Head from 'next/head';

// Hooks
import useTranslation from '../hooks/useTranslation';

// Components
import ArticlesSection from '../containers/Articles';

// Contents
const pageName = {
  'pt-BR': {
    pageTitle: 'Artigos',
    pageDescription:
      'Eu escrevo artigos sobre tecnologia - e as vezes sobre alguns "pensamentos esquecíveis".',
  },
  'en-US': {
    pageTitle: 'Articles',
    pageDescription:
      'I write articles about technology - and sometimes about some "forgettable thoughts" of mine.',
  },
};

function Articles() {
  const translate = useTranslation(pageName);

  return (
    <>
      <Head>
        <title>{translate('pageTitle')}</title>
        <meta name="description" content={translate('pageDescription')} />
      </Head>
      <main>
        <ArticlesSection />
      </main>
    </>
  );
}

export default Articles;
