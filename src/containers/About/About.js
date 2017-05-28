import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import styles from './styles.css';

const About = ({ sectionContent, randomKey }) => (
  <div className={styles.component}>
    <div className={styles.container}>
      <h2 className={styles.headerText}>{sectionContent.title}</h2>
      {
        sectionContent.text.map(item =>
          // (<p key={randomKey()}>{item}</p>),
          (<p
            key={randomKey()}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }}
          />),
        )
      }
      <i className="fa fa-address-book fa-3x" aria-hidden="true" />
    </div>
  </div>
);

About.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default About;
