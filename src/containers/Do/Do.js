import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Do = ({ sectionContent, randomKey }) => (
  <div>
    <h2>{sectionContent.primaryTitle}</h2>
    <h3>{sectionContent.secondaryTitle}</h3>
    {
      sectionContent.text.map(item =>
        (<p key={randomKey()}>{item}</p>),
      )
    }
  </div>
);

Do.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default Do;
