import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import About from './About';
import Loading from '../../components/Loading';

class AboutContainer extends Component {
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
    const text = content.content;

    this.setState({
      isLoading: false,
      content: { title, text },
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
            <About
              divRef={this.props.divRef}
              pageContent={pageContent}
            />
        }
      </div>
    );
  }
}

AboutContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  content: state.about,
});

export default connect(
  mapStateToProps,
)(AboutContainer);
