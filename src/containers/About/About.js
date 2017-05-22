import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const About = ({ sectionContent, randomKey }) => (
  <div>
    <h2>{sectionContent.title}</h2>
    {
      sectionContent.text.map(item =>
        (<p key={randomKey()}>{item}</p>),
      )
    }
  </div>
);

About.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default About;
