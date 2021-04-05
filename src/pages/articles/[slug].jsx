/* eslint-disable react/no-danger */
// React/Next Components
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import getArticle from '../../lib/getArticle';
import getArticlesSlugs from '../../lib/getArticlesSlugs';

// Components
import Section from '../../components/Section';

// Styles
import styles from '../../styles/pages/Article/Article.module.scss';

const Article = ({ article }) => {
  const router = useRouter();
  const { metadata } = article;

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.excerpt} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={metadata.excerpt} />
        <meta property="og:image" content={metadata.imageUrl} />
        <meta property="og:image:alt" content={metadata.imageAlt} />
        <meta property="og:url" content={`pietrobondioli.com.br${router.asPath}`} />
        <meta property="og:site_name" content="Pietro Bondioli" />
        <meta property="article:author" content="Pietro Bondioli" />
        <meta property="article:section" content="Technology" />
        <meta property="article:published_time" content={metadata.published} />
        <meta property="article:modified_time" content={metadata.lastModified} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.twitterProfile} />
        <meta name="twitter:creator" content={metadata.twitterProfile} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.excerpt} />
        <meta name="twitter:image" content={metadata.imageUrl} />
        <meta name="twitter:image:alt" content={metadata.imageAlt} />
      </Head>
      <Section>
        <img
          className={styles.article_img}
          src={require('../../public/articles/passwords-and-digital-security.png').default}
          alt=""
        />
        <article className={styles.article} dangerouslySetInnerHTML={{ __html: article.content }} />
      </Section>
    </>
  );
};

export async function getStaticProps(context) {
  const {
    locale,
    params: { slug },
  } = context;
  const article = await getArticle(locale, slug);

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths(context) {
  const { locales, defaultLocale } = context;

  const slugs = await getArticlesSlugs(locales);

  const paths = locales.reduce((map, locale) => {
    let slugsOfDefaultLocale = [];
    if (locale === defaultLocale) {
      slugsOfDefaultLocale = slugs[locale].map((slug) => {
        return { params: { slug } };
      });
    }
    const slugsOfLocales = slugs[locale].map((slug) => {
      return { params: { slug }, locale };
    });
    return [...map, ...slugsOfLocales, ...slugsOfDefaultLocale];
  }, []);

  return {
    paths,
    fallback: false,
  };
}

export default Article;
