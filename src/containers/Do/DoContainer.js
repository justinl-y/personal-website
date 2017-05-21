import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Do from './Do';
import Loading from '../../components/Loading';
import { fetchDo } from '../../redux/modules/doActions';

class DoContainer extends Component {
  componentDidMount() {
    this.props.fetchDo();
  }

  render() {
    const divRef = this.props.divRef;
    const { isLoading } = this.props;
    const pageContent = this.props.content;

    return (
      <div ref={divRef} >
        {
          isLoading ?
            <Loading />
          :
            <Do
              pageContent={pageContent}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DoContainer);
