import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const About = ({ sectionContent }) => (
  <div>
    <h2>{sectionContent.title}</h2>
    {
      sectionContent.text.map(item =>
        (<p key={Date.now() * Math.random()}>{item}</p>),
      )
    }
  </div>
);

About.propTypes = {
  sectionContent: PropTypes.object.isRequired,
};

export default About;
