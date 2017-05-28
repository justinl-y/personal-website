import React from 'react';

import NavItem from '../NavItem';
import { randomKey } from '../../helpers/functions';
import styles from './styles.css';

const navItemsLeft = [
  { to: '/about', title: 'About Me', exact: false },
  { to: '/do', title: 'What I Do', exact: false },
  { to: '/know', title: 'What I Know', exact: false },
];

const navItemsCentre = [
  { to: '/', title: 'SoP', exact: true },
];

const navItemsRight = [
  { to: '/work', title: 'My Work', exact: false },
  { to: '/contact', title: 'Contact Me', exact: false },
];

const renderNavItems = navItems => (
  navItems.map(item => (
    <NavItem
      key={randomKey()}
      to={item.to}
      title={item.title}
      exact={item.exact}
    />
  ))
);

const Navbar = () => (
  <nav className={styles.navBar}>
    <div className={styles.navBarItemLeft}>{renderNavItems(navItemsLeft)}</div>
    <div className={styles.navBarItemMiddle}>{renderNavItems(navItemsCentre)}</div>
    <div className={styles.navBarItemRight}>{renderNavItems(navItemsRight)}</div>
  </nav>
);

export default Navbar;
