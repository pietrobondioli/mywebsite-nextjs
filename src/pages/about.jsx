// React/Next Components
import Head from 'next/head';
import { useRouter } from 'next/router';

// Hooks
import useTranslation from '@hooks/useTranslation';

// Components
import Education from '@containers/About/Education';
import Experience from '@containers/About/Experience';
import Skills from '@containers/About/Skills';

// Contents
const aboutContent = {
  'pt-BR': {
    pageTitle: 'Sobre - Pietro Bondioli',
    pageDescription: 'Conhecimentos - Educação - Experiência',
  },
  'en-US': {
    pageTitle: 'About - Pietro Bondioli',
    pageDescription: 'Skills - Education - Experience',
  },
};

function About() {
  const router = useRouter();
  const translate = useTranslation(aboutContent);

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
        <Skills />
        <Experience />
        <Education />
      </main>
    </>
  );
}

export default About;
