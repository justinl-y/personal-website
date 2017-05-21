import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Hero = ({ pageContent }) => ( // eslint-disable-line
  <div id="hero">
    <h1>{pageContent.primaryTitle}</h1>
    <h2>{pageContent.secondaryTitle}</h2>
  </div>
);

Hero.propTypes = {
  pageContent: PropTypes.object.isRequired,
};

export default Hero;
