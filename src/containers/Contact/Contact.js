import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Contact = props => (
  <div ref={props.divRef}>
    <p>Contact</p>
  </div>
);

Contact.propTypes = {
  divRef: PropTypes.func.isRequired,
};

export default Contact;
