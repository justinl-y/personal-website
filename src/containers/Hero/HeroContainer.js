import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Hero from './Hero';
import Loading from '../../components/Loading';

class HeroContainer extends Component {
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

    this.setState({
      isLoading: false,
      content: { primaryTitle, secondaryTitle },
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
            <Hero pageContent={pageContent} />
        }
      </div>
    );
  }
}

HeroContainer.propTypes = {
  content: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  content: state.hero,
});

export default connect(
  mapStateToProps,
)(HeroContainer);

