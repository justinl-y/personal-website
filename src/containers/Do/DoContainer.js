import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Do from './Do';

class DoContainer extends Component {
  render() {
    return (
      <Do divRef={this.props.divRef} />
    );
  }
}

DoContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
};

export default DoContainer;
