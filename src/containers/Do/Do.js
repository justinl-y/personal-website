import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Do = props => (
  <div ref={props.divRef} >
    <p>Do</p>
  </div>
);

Do.propTypes = {
  divRef: PropTypes.func.isRequired,
};

export default Do;
