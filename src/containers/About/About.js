import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const About = props => (
  <div ref={props.divRef}>
    <p>About</p>
  </div>
);

About.propTypes = {
  divRef: PropTypes.func.isRequired,
};

export default About;
