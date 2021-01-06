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
  },
  'en-US': {
    pageTitle: 'About',
  },
};

function About() {
  const translate = useTranslation(aboutContent);

  return (
    <>
      <Head>
        <title>{translate('pageTitle')}</title>
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
