import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const About = ({ divRef, pageContent }) => (
  <div ref={divRef}>
    <h2>{pageContent.title}</h2>
    {
      pageContent.text.map(item =>
        (<p key={Date.now() * Math.random()}>{item}</p>),
      )
    }
  </div>
);

About.propTypes = {
  divRef: PropTypes.func.isRequired,
  pageContent: PropTypes.object.isRequired,
};

export default About;
