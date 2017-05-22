import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Know from './Know';
import Loading from '../../components/Loading';
import { fetchKnow } from '../../redux/modules/knowActions';
import { randomKey } from '../../helpers/functions';

class KnowContainer extends Component {
  componentDidMount() {
    this.props.fetchKnow();
  }

  render() {
    const divRef = this.props.divRef;
    const { isLoading } = this.props;
    const sectionContent = this.props.content;

    return (
      <div ref={divRef}>
        {
          isLoading ?
            <Loading />
          :
            <Know
              sectionContent={sectionContent}
              randomKey={randomKey}
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
  randomKey: () => {
    dispatch(randomKey());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(KnowContainer);
