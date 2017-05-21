import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Do = ({ divRef, pageContent }) => (
  <div ref={divRef} >
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
  divRef: PropTypes.func.isRequired,
  pageContent: PropTypes.object.isRequired,
};

export default Do;
