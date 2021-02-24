// React/Next Components
import React from 'react';
import Link from 'next/link';

// Styles
import styles from '../../../styles/pages/Articles/ArticleCard.module.scss';

const ArticleCard = (props) => {
  const { articleSlug, articleImage, articleTitle, articleDate, articleAuthor } = props;

  return (
    <Link href={`/articles/${articleSlug}`}>
      <div className={styles.articlesCard}>
        <div className={styles.cardImage}>
          <img src={articleImage} alt={articleTitle} className={styles.image} />
        </div>
        <div className={styles.cardText}>
          <div className={styles.title}>{articleTitle}</div>
          <div className={styles.date}>{articleDate}</div>
          <div className={styles.author}>by: {articleAuthor}</div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
