// React/Next Components
import React from 'react';
import Link from 'next/link';

// Contexts
import { ThemeContext } from '../../../contexts/ThemeContext';

// Styles
import styles from '../../../styles/components/Navbar/NavbarItem.module.scss';

const NavbarItem = (props) => {
  const { itemName, itemLink } = props;
  const { isDarkTheme } = React.useContext(ThemeContext);

  return (
    <Link href={itemLink}>
      <a className={`${styles.menu__item} ${isDarkTheme && `${styles.menu__item_darkMode}`}`}>
        {itemName}
      </a>
    </Link>
  );
};

export default NavbarItem;
