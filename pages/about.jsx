// React/Next Components
import Head from 'next/head';

// Hooks
import useTranslation from '../hooks/useTranslation';

// Components
import Education from '../components/About/Education';
import Experience from '../components/About/Experience';
import Skills from '../components/About/Skills';

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
      <Skills />
      <Education />
      <Experience />
    </>
  );
}

export default About;
