// React/Next Components
import React from 'react';

// Contexts
import { ThemeContext } from '../../../contexts/ThemeContext';

// Hooks
import useTranslation from '../../../hooks/useTranslation';

// Contents
import sectionContent from './content';

// Styles
import styles from '../../../styles/components/Section/SectionContent.module.scss';

const SectionContent = (props) => {
  const { children, text, image, readMore } = props;
  const translation = useTranslation(sectionContent);

  return (
    <div className={styles.section__content}>
      <img className={styles.content__image} src={image} alt="img" />
      <div>
        <div className={styles.content__text}>{children || text}</div>
        {readMore && (
          <div className={`button ${styles.content__button}`}>{translation('readMore')}</div>
        )}
      </div>
    </div>
  );
};

export default SectionContent;
