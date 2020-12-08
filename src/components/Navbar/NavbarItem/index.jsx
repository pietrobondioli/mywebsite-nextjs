// React/Next Components
import React from 'react';
import Link from 'next/link';

// Styles
import styles from '../../../styles/components/Navbar/NavbarItem.module.scss';

const NavbarItem = (props) => {
  const { itemName, itemLink, itemLocale, itemScroll } = props;

  return (
    <Link href={itemLink || ''} locale={itemLocale} scroll={itemScroll}>
      <a className={styles.menu__item}>{itemName}</a>
    </Link>
  );
};

export default NavbarItem;
