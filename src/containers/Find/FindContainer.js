import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Find from './Find';
import Loading from '../../components/Loading';
import { fetchFind } from '../../redux/modules/findActions';

class FindContainer extends Component {
  componentDidMount() {
    this.props.fetchFind();
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
            <Find
              divRef={divRef}
              sectionContent={sectionContent}
            />
        }
      </div>
    );
  }
}

FindContainer.defaultProps = {
  content: {},
};

FindContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchFind: PropTypes.func.isRequired,
  content: PropTypes.object,
};

const mapStateToProps = state => ({
  isLoading: state.find.isLoading,
  content: state.find.content,
});

const mapDispatchToProps = dispatch => ({
  fetchFind: () => {
    dispatch(fetchFind());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FindContainer);
