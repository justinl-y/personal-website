import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Work from './Work';

class WorkContainer extends Component {
  render() {
    return (
      <Work divRef={this.props.divRef} />
    );
  }
}

WorkContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
};

export default WorkContainer;
