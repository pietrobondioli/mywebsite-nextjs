// React/Next Components
import Head from 'next/head';

// Hooks
import useTranslation from '../hooks/useTranslation';

// Components
import Education from '../containers/About/Education';
import Experience from '../containers/About/Experience';
import Skills from '../containers/About/Skills';

// Contents
const aboutContent = {
  'pt-BR': {
    pageTitle: 'Sobre',
    pageDescription: 'Conhecimentos - Educação - Experiência',
  },
  'en-US': {
    pageTitle: 'About',
    pageDescription: 'Skills - Education - Experience',
  },
};

function About() {
  const translate = useTranslation(aboutContent);

  return (
    <>
      <Head>
        <title>{translate('pageTitle')}</title>
        <meta name="description" content={translate('pageDescription')} />
      </Head>
      <main>
        <Skills />
        <Education />
        <Experience />
      </main>
    </>
  );
}

export default About;
