// React/Next Components
import Head from 'next/head';

// Hooks
import useTranslation from '../hooks/useTranslation';

// Components
import ProjectsSection from '../containers/Projects';

// Contents
const projectsContent = {
  'pt-BR': {
    pageTitle: 'Projetos',
    pageDescription: 'Aqui você pode ver alguns projetos dos quais eu participei ou fui criador.',
  },
  'en-US': {
    pageTitle: 'Projects',
    pageDescription: 'Here you can take a look at some projects I created or participated.',
  },
};

function Projects() {
  const translate = useTranslation(projectsContent);

  return (
    <>
      <Head>
        <title>{translate('pageTitle')}</title>
        <meta name="description" content={translate('pageDescription')} />
      </Head>
      <main>
        <ProjectsSection />
      </main>
    </>
  );
}

export default Projects;
