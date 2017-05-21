import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import About from './About';
import Loading from '../../components/Loading';
import { fetchAbout } from '../../redux/modules/aboutActions';

class AboutContainer extends Component {
  componentDidMount() {
    this.props.fetchAbout();
  }

  render() {
    const { divRef, isLoading } = this.props;
    const sectionContent = this.props.content;

    return (
      <div ref={divRef}>
        {
          isLoading ?
            <Loading />
          :
            <About
              sectionContent={sectionContent}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutContainer);
