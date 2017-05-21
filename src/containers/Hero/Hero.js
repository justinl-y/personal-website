import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Hero = ({ sectionContent }) => (
  <div>
    <h1>{sectionContent.primaryTitle}</h1>
    <h2>{sectionContent.secondaryTitle}</h2>
  </div>
);

Hero.propTypes = {
  sectionContent: PropTypes.object.isRequired,
};

export default Hero;
