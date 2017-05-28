import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Footer = ({ sectionContent }) => (
  <div className={styles.footer}>
    <p>{sectionContent.version} - {sectionContent.name}</p>
  </div>
);

Footer.propTypes = {
  sectionContent: PropTypes.object.isRequired,
};

export default Footer;
