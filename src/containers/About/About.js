import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import styles from './styles.css';

const About = ({ sectionContent, divRef, randomKey }) => (
  <div className={styles.component}>
    <div className={styles.title} ref={divRef}>
      <i className="fa fa-user" aria-hidden="true" />
      <h2 className={styles.headerText}>{sectionContent.title}</h2>
    </div>
    <div className={styles.content}>
      {
        sectionContent.text.map(item => (
          <p
            key={randomKey()}
            className={styles.workItems}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} // eslint-disable-line
          />
        ))
      }
    </div>
  </div>
);

About.propTypes = {
  divRef: PropTypes.func.isRequired,
  sectionContent: PropTypes.object.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default About;
