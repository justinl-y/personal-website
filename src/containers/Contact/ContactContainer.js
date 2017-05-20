import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Contact from './Contact';

class ContactContainer extends Component {
  render() {
    return (
      <Contact divRef={this.props.divRef} />
    );
  }
}

ContactContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
};

export default ContactContainer;
