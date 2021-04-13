// React/Next Components
import Head from 'next/head';
import { useRouter } from 'next/router';

// Hooks
import useTranslation from '@hooks/useTranslation';

// Components
import ProjectsSection from '@containers/Projects';

// Contents
const projectsContent = {
  'pt-BR': {
    pageTitle: 'Projetos - Pietro Bondioli',
    pageDescription: 'Aqui você pode ver alguns projetos dos quais eu participei ou fui criador.',
  },
  'en-US': {
    pageTitle: 'Projects - Pietro Bondioli',
    pageDescription: 'Here you can take a look at some projects I created or participated.',
  },
};

function Projects() {
  const router = useRouter();
  const translate = useTranslation(projectsContent);

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
        <ProjectsSection />
      </main>
    </>
  );
}

export default Projects;
