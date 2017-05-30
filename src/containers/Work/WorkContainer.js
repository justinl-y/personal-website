import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Work from './Work';
import Loading from '../../components/Loading';
import { fetchWork } from '../../redux/modules/workActions';
import { randomKey } from '../../helpers/functions';

class WorkContainer extends Component {
  componentDidMount() {
    this.props.fetchWork();
  }

  render() {
    const divRef = this.props.divRef;
    const { isLoading } = this.props;
    const sectionContent = this.props.content;

    return (
      <div>
        {
          isLoading ?
            <Loading />
          :
            <Work
              divRef={divRef}
              sectionContent={sectionContent}
              randomKey={randomKey}
            />
        }
      </div>
    );
  }
}

WorkContainer.defaultProps = {
  content: {},
};

WorkContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchWork: PropTypes.func.isRequired,
  content: PropTypes.object,
};

const mapStateToProps = state => ({
  isLoading: state.work.isLoading,
  content: state.work.content,
});

const mapDispatchToProps = dispatch => ({
  fetchWork: () => {
    dispatch(fetchWork());
  },
  randomKey: () => {
    dispatch(randomKey());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkContainer);
