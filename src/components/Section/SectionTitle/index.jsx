// React/Next Components
import React from 'react';

// Styles
import styles from '@styles/components/Section/SectionTitle.module.scss';

// Components
import TerminalUnderslash from '../../TerminalUnderslash';

const SectionTitle = (props) => {
  const { title } = props;

  return (
    <>
      {title && (
        <div className={styles.section__title}>
          {title} <TerminalUnderslash animation="terminal__underslash_active" />
        </div>
      )}
    </>
  );
};

export default SectionTitle;
