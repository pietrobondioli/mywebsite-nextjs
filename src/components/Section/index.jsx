// React/Next Components
import React from 'react';

// Styles
import styles from '@styles/components/Section/Section.module.scss';

const Section = (props) => {
  const { sectionType, children } = props;

  return (
    <section className={`${styles.section} ${sectionType && styles[sectionType]}`}>
      {children}
    </section>
  );
};

export default Section;
