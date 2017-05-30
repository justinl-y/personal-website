import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import About from './About';
import Loading from '../../components/Loading';
import { fetchAbout } from '../../redux/modules/aboutActions';
import { randomKey } from '../../helpers/functions';

class AboutContainer extends Component {
  componentDidMount() {
    this.props.fetchAbout();
  }

  render() {
    const { divRef, isLoading } = this.props;
    const sectionContent = this.props.content;

    return (
      <div>
        {
          isLoading ?
            <Loading />
          :
            <About
              divRef={divRef}
              sectionContent={sectionContent}
              randomKey={randomKey}
            />
        }
      </div>
    );
  }
}

AboutContainer.defaultProps = {
  content: {},
};

AboutContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchAbout: PropTypes.func.isRequired,
  content: PropTypes.object,
};

const mapStateToProps = state => ({
  isLoading: state.about.isLoading,
  content: state.about.content,
});

const mapDispatchToProps = dispatch => ({
  fetchAbout: () => {
    dispatch(fetchAbout());
  },
  randomKey: () => {
    dispatch(randomKey());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutContainer);
