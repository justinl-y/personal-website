import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Work = props => (
  <div ref={props.divRef}>
    <p>Work</p>
  </div>
);

Work.propTypes = {
  divRef: PropTypes.func.isRequired,
};

export default Work;
