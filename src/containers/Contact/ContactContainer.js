import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Contact from './Contact';
import Loading from '../../components/Loading';

class ContactContainer extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      content: {},
    };
  }

  componentDidMount() {
    this.seperateContent(this.props.content);
  }

  seperateContent(content) {
    const { title } = content;
    const items = content.content;

    this.setState({
      isLoading: false,
      content: { title, items },
    });
  }

  render() {
    const { isLoading } = this.state;
    const pageContent = this.state.content;

    return (
      <div>
        {
          isLoading ?
            <Loading />
          :
            <Contact
              divRef={this.props.divRef}
              pageContent={pageContent}
            />
      }
      </div>
    );
  }
}

ContactContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  content: state.contact,
});

export default connect(
  mapStateToProps,
)(ContactContainer);
