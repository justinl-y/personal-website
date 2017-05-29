import React from 'react';

import NavItem from '../NavItem';
import { randomKey } from '../../helpers/functions';
import styles from './styles.css';

const navItemsLeft = [
  { to: '/about', exact: false, title: 'About Me', icon: '<i class="fa fa-user-circle fa-1x" aria-hidden="true" />' },
  { to: '/do', exact: false, title: 'What I Do', icon: '<i class="fa fa-cogs fa-1x" aria-hidden="true" />' },
  { to: '/know', exact: false, title: 'What I Know', icon: '<i class="fa fa-lightbulb-o fa-1x" aria-hidden="true" />' },
];

const navItemsCentre = [
  { to: '/', exact: true, title: 'SoP', icon: '<i class="fa fa-home fa-1x" aria-hidden="true"></i>' },
];

const navItemsRight = [
  { to: '/work', exact: false, title: 'My Work', icon: '<i class="fa fa-archive fa-1x" aria-hidden="true" />' },
  { to: '/contact', exact: false, title: 'Contact Me', icon: '<i class="fa fa-telegram fa-1x" aria-hidden="true" />' },
];

const renderNavItems = navItems => (
  navItems.map(item => (
    <NavItem
      key={randomKey()}
      exact={item.exact}
      to={item.to}
      title={item.title}
      icon={item.icon}
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
