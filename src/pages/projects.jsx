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
  },
  'en-US': {
    pageTitle: 'Projects',
  },
};

function Projects() {
  const translate = useTranslation(projectsContent);

  return (
    <>
      <Head>
        <title>{translate('pageTitle')}</title>
      </Head>
      <main>
        <ProjectsSection />
      </main>
    </>
  );
}

export default Projects;
