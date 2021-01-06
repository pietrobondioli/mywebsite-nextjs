// React/Next Components
import React from 'react';
import Link from 'next/link';

// Styles
import styles from '../../../styles/pages/Articles/ArticleCard.module.scss';

const ArticleCard = (props) => {
  const { articleSlug, articleImage, articleTitle, articleDate, articleAbstract } = props;

  return (
    <Link href={`/articles/${articleSlug}`}>
      <div className={styles.articleCard}>
        <img src={articleImage} alt={articleTitle} className={styles.image} />
        <div className={styles.title}>{articleTitle}</div>
        <div className={styles.date}>{articleDate}</div>
        <div className={styles.abstract}>{articleAbstract}</div>
      </div>
    </Link>
  );
};

export default ArticleCard;
