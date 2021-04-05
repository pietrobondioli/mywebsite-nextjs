// React/Next Components
import Head from 'next/head';
import { useRouter } from 'next/router';

// Hooks
import useTranslation from '../hooks/useTranslation';

// Components
import ArticlesSection from '../containers/Articles';

// Contents
const pageName = {
  'pt-BR': {
    pageTitle: 'Artigos - Pietro Bondioli',
    pageDescription:
      'Eu escrevo artigos sobre tecnologia - e as vezes sobre alguns "pensamentos esquecíveis".',
  },
  'en-US': {
    pageTitle: 'Articles - Pietro Bondioli',
    pageDescription:
      'I write articles about technology - and sometimes about some "forgettable thoughts" of mine.',
  },
};

function Articles() {
  const router = useRouter();
  const translate = useTranslation(pageName);

  return (
    <>
      <Head>
        <title>{translate('pageTitle')}</title>
        <meta name="description" content={translate('pageDescription')} />
        <meta property="og:title" content={translate('pageTitle')} />
        <meta property="og:description" content={translate('pageDescription')} />
        <meta property="og:url" content={`pietrobondioli.com.br${router.asPath}`} />
        <meta name="twitter:title" content={translate('pageTitle')} />
        <meta name="twitter:description" content={translate('pageDescription')} />
      </Head>
      <main>
        <ArticlesSection />
      </main>
    </>
  );
}

export default Articles;
