// React/Next Components
import React from 'react';

// Translations
import useTranslation from '@hooks/useTranslation';

// Styles
import styles from '@styles/pages/Articles/Articles.module.scss';

// Components
import Section from '@components/Section';
import ArticleCard from './ArticleCard';

// Content
import articles from './content';

const Articles = () => {
  return (
    <Section>
      <div className={styles.articles}>
        {articles.map((card) => {
          const translate = useTranslation(card);
          return (
            <ArticleCard
              key={translate('articleSlug')}
              articleSlug={translate('articleSlug')}
              articleImage={card.articleImage}
              articleTitle={translate('articleTitle')}
              articleAuthor={card.articleAuthor}
              articleDate={card.articleDate}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Articles;
