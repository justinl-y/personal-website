import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Know from './Know';

class KnowContainer extends Component {
  render() {
    return (
      <Know divRef={this.props.divRef} />
    );
  }
}

KnowContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
};

export default KnowContainer;
