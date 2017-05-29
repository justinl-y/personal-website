import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import styles from './styles.css';

const About = ({ sectionContent, randomKey }) => (
  <div className={styles.component}>
    <div className={styles.container}>
      <i className="fa fa-user-circle fa-3x" aria-hidden="true" />
      <h2 className={styles.headerText}>{sectionContent.title}</h2>
      {
        sectionContent.text.map(item =>
          // (<p key={randomKey()}>{item}</p>),
          (<p
            key={randomKey()}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} // eslint-disable-line
          />),
        )
      }
    </div>
  </div>
);

About.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default About;
