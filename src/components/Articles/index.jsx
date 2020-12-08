// React/Next Components
import React from 'react';

// Components
import Section from '../Section';
import ArticleCard from './ArticleCard';

// Translations
import useTranslation from '../../hooks/useTranslation';

// Content
import articlesContent from './content';

// Contexts
import { ThemeContext } from '../../contexts/ThemeContext';

// Styles
import styles from '../../styles/pages/Articles/Articles.module.scss';

const Articles = () => {
  return (
    <Section>
      <div className={styles.articles}>
        {articlesContent.map((card) => {
          const translate = useTranslation(card);
          return (
            <ArticleCard
              key={card.articleSlug}
              articleSlug={card.articleSlug}
              articleImage={card.articleImage}
              articleDate={card.articleDate}
              articleTitle={translate('articleTitle')}
              articleAbstract={translate('articleAbstract')}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Articles;
