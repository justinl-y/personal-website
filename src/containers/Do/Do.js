import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Do = ({ sectionContent, divRef, randomKey }) => (
  <div className={styles.component}>
    <div className={styles.quote}>
      <h2>{sectionContent.quote}</h2>
    </div>
    <div className={styles.title} ref={divRef}>
      <i className={'fa fa-cogs fa-3x'} aria-hidden="true" />
      <h2>{sectionContent.primaryTitle}</h2>
    </div>
    <div className={styles.content}>
      {
        sectionContent.text.map(item => (
          <p key={randomKey()} className={styles.doItems}>{item}</p>
        ))
      }
    </div>
  </div>
);

Do.propTypes = {
  divRef: PropTypes.func.isRequired,
  sectionContent: PropTypes.object.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default Do;
