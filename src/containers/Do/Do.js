import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Do = ({ sectionContent }) => (
  <div>
    <h2>{sectionContent.primaryTitle}</h2>
    <h3>{sectionContent.secondaryTitle}</h3>
    {
      sectionContent.text.map(item =>
        (<p key={Date.now() * Math.random()}>{item}</p>),
      )
    }
  </div>
);

Do.propTypes = {
  sectionContent: PropTypes.object.isRequired,
};

export default Do;
