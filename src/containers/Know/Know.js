import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Know = props => (
  <div ref={props.divRef}>
    <p>Know</p>
  </div>
);

Know.propTypes = {
  divRef: PropTypes.func.isRequired,
};

export default Know;
