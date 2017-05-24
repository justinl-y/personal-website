import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './styles.css';

const NavItem = ({ exact, to, title }) => (
  <li className={styles.navItem}>
    <NavLink
      exact={exact}
      to={to}
      activeClassName={styles.selected}
    >{title}</NavLink>
  </li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
};

export default NavItem;
