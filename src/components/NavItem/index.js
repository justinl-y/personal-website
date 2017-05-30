import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import DOMPurify from 'dompurify';

import styles from './styles.css';

const NavItem = ({ exact, to, title, icon }) => (
  <li className={styles.navItem}>
    <NavLink
      exact={exact}
      to={to}
      activeClassName={styles.selected}
      className={styles.navLink}
    >
      <div className={styles.navlinkItems}>
        <i
          className={styles.navLinkIcon}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(icon) }} // eslint-disable-line
        />
        <span className={styles.navLinkText}>{title}</span>
      </div>
    </NavLink>
  </li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavItem;
