import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Do from './Do';
import Loading from '../../components/Loading';

class DoContainer extends Component {
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
    const [primaryTitle, secondaryTitle] = content.title;
    const text = content.content;

    this.setState({
      isLoading: false,
      content: { primaryTitle, secondaryTitle, text },
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
            <Do
              divRef={this.props.divRef}
              pageContent={pageContent}
            />
        }
      </div>
    );
  }
}

DoContainer.propTypes = {
  divRef: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  content: state.do,
});

export default connect(
  mapStateToProps,
)(DoContainer);
