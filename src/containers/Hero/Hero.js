import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Hero = ({ sectionContent }) => (
  <div className={styles.component}>
    <h1 className={styles.headerText}>{sectionContent.primaryTitle}</h1>
    <h2>{sectionContent.secondaryTitle}</h2>
  </div>
);

Hero.propTypes = {
  sectionContent: PropTypes.object.isRequired,
};

export default Hero;
