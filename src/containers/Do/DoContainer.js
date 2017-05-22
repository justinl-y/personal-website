import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Do from './Do';
import Loading from '../../components/Loading';
import { fetchDo } from '../../redux/modules/doActions';
import { randomKey } from '../../helpers/functions';

class DoContainer extends Component {
  componentDidMount() {
    this.props.fetchDo();
  }

  render() {
    const divRef = this.props.divRef;
    const { isLoading } = this.props;
    const sectionContent = this.props.content;

    return (
      <div ref={divRef} >
        {
          isLoading ?
            <Loading />
          :
            <Do
              sectionContent={sectionContent}
              randomKey={randomKey}
            />
        }
      </div>
    );
  }
}

DoContainer.defaultProps = {
  content: {},
};

DoContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchDo: PropTypes.func.isRequired,
  content: PropTypes.object,
};

const mapStateToProps = state => ({
  isLoading: state.do.isLoading,
  content: state.do.content,
});

const mapDispatchToProps = dispatch => ({
  fetchDo: () => {
    dispatch(fetchDo());
  },
  randomKey: () => {
    dispatch(randomKey());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DoContainer);
