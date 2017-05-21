import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Work from './Work';
import Loading from '../../components/Loading';

class WorkContainer extends Component {
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
            <Work
              divRef={this.props.divRef}
              pageContent={pageContent}
            />
        }
      </div>
    );
  }
}

WorkContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  content: state.work,
});

export default connect(
  mapStateToProps,
)(WorkContainer);
