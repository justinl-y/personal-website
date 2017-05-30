import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Contact from './Contact';
import Loading from '../../components/Loading';
import { fetchContact } from '../../redux/modules/contactActions';

class ContactContainer extends Component {
  componentDidMount() {
    this.props.fetchContact();
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
            <Contact
              divRef={divRef}
              sectionContent={sectionContent}
            />
        }
      </div>
    );
  }
}

ContactContainer.defaultProps = {
  content: {},
};

ContactContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchContact: PropTypes.func.isRequired,
  content: PropTypes.object,
};

const mapStateToProps = state => ({
  isLoading: state.contact.isLoading,
  content: state.contact.content,
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => {
    dispatch(fetchContact());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactContainer);
