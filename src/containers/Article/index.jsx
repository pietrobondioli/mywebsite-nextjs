// React/Next Components
import React from 'react';
import Head from 'next/head';

// Components
import Section from '../../components/Section';

// Translations
import useTranslation from '../../hooks/useTranslation';

// Styles
import styles from '../../styles/pages/Article/Article.module.scss';

const Article = (props) => {
  const { title, image, content } = props;

  return (
    <>
      <Head>
        <title>a</title>
      </Head>
      <Section>a</Section>
    </>
  );
};

export default Article;
