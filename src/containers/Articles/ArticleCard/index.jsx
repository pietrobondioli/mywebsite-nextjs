// React/Next Components
import React from 'react';
import Link from 'next/link';

// Hooks
import useTranslation from '../../../hooks/useTranslation';

// Styles
import styles from '../../../styles/pages/Articles/ArticleCard.module.scss';

const articleCardContent = {
  'pt-BR': {
    by: 'por',
  },
  'en-US': {
    by: 'by',
  },
};

const ArticleCard = (props) => {
  const { articleSlug, articleImage, articleTitle, articleDate, articleAuthor } = props;
  let translate = useTranslation(articleCardContent);

  return (
    <Link href={`/articles/${articleSlug}`}>
      <div className={styles.articlesCard}>
        <img src={articleImage} alt={articleTitle} className={styles.cardImage} />
        <div className={styles.cardText}>
          <div className={styles.title}>{articleTitle}</div>
          <div className={styles.date}>{articleDate}</div>
          <div className={styles.author}>
            {translate('by')}: {articleAuthor}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
