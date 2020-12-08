// React/Next Components
import React from 'react';

// Styles
import styles from '../../styles/components/Section/Section.module.scss';

const Section = (props) => {
  const { children } = props;

  return <section className={styles.section}>{children}</section>;
};

export default Section;
