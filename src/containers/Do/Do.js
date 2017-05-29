import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Do = ({ sectionContent, randomKey }) => (
  <div className={styles.component}>
    <div className={styles.container}>
      <i className="fa fa-cogs fa-3x" aria-hidden="true" />
      <h2>{sectionContent.primaryTitle}</h2>
      <h3>{sectionContent.secondaryTitle}</h3>
      {
        sectionContent.text.map(item =>
          (<p key={randomKey()}>{item}</p>),
        )
      }
    </div>
  </div>
);

Do.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default Do;
