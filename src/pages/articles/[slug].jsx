// React/Next Components
import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Components
import Section from '../../components/Section';

// Contexts
import { LocaleContext } from '../../contexts/LocaleContext';

const Article = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { locale } = React.useContext(LocaleContext);
  const ArticleContent = dynamic(() => import(`../../articles/${slug}/${locale}`), { ssr: false });
  return (
    <>
      <Head>
        <meta property="og:type" content="article" />
      </Head>
      <Section>
        <ArticleContent />
      </Section>
    </>
  );
};

export default Article;
