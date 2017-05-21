import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Know from './Know';
import Loading from '../../components/Loading';
import { fetchKnow } from '../../redux/modules/knowActions';

class KnowContainer extends Component {
  componentDidMount() {
    this.props.fetchKnow();
  }

  render() {
    const divRef = this.props.divRef;
    const { isLoading } = this.props;
    const pageContent = this.props.content;

    return (
      <div ref={divRef}>
        {
          isLoading ?
            <Loading />
          :
            <Know
              pageContent={pageContent}
            />
        }
      </div>
    );
  }
}

KnowContainer.defaultProps = {
  content: {},
};

KnowContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchKnow: PropTypes.func.isRequired,
  content: PropTypes.object,
};

const mapStateToProps = state => ({
  isLoading: state.know.isLoading,
  content: state.know.content,
});

const mapDispatchToProps = dispatch => ({
  fetchKnow: () => {
    dispatch(fetchKnow());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(KnowContainer);
