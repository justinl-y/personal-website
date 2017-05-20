import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.scss';

const Navbar = () => (
  <nav>
    <li><NavLink exact to="/" activeClassName={styles.selected}>SoP |</NavLink></li>
    <li><NavLink to="/about" activeClassName={styles.selected}>| About Me |</NavLink></li>
    <li><NavLink to="/do" activeClassName={styles.selected}>| What I Do |</NavLink></li>
    <li><NavLink to="/know" activeClassName={styles.selected}>| What I Know |</NavLink></li>
    <li><NavLink to="/work" activeClassName={styles.selected}>| My Work |</NavLink></li>
    <li><NavLink to="/contact" activeClassName={styles.selected}>| Contact Me</NavLink></li>
  </nav>
);

export default Navbar;
