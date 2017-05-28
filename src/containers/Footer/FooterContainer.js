import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Loading from '../../components/Loading';
import { fetchFooter } from '../../redux/modules/footerActions';

class FooterContainer extends Component {
  componentDidMount() {
    this.props.fetchFooter();
  }

  render() {
    const { isLoading } = this.props;
    const sectionContent = this.props.content;

    return (
      <div>
        {
          isLoading ?
            <Loading />
          :
            <Footer
              sectionContent={sectionContent}
            />
        }
      </div>
    );
  }
}

FooterContainer.defaultProps = {
  content: {},
};

FooterContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchFooter: PropTypes.func.isRequired,
  content: PropTypes.object,
};

const mapStateToProps = state => ({
  isLoading: state.footer.isLoading,
  content: state.footer.content,
});

const mapDispatchToProps = dispatch => ({
  fetchFooter: () => {
    dispatch(fetchFooter());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FooterContainer);
