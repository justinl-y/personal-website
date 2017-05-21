import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Do = ({ pageContent }) => (
  <div>
    <h2>{pageContent.primaryTitle}</h2>
    <h3>{pageContent.secondaryTitle}</h3>
    {
      pageContent.text.map(item =>
        (<p key={Date.now() * Math.random()}>{item}</p>),
      )
    }
  </div>
);

Do.propTypes = {
  pageContent: PropTypes.object.isRequired,
};

export default Do;
