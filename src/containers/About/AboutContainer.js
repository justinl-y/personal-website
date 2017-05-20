import React, { Component } from 'react';
import PropTypes from 'prop-types';

import About from './About';

class AboutContainer extends Component {
  render() {
    return (
      <About divRef={this.props.divRef} />
    );
  }
}

AboutContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
};

export default AboutContainer;
