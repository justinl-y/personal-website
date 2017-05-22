import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Hero from './Hero';
import Loading from '../../components/Loading';
import { fetchHero } from '../../redux/modules/heroActions';

class HeroContainer extends Component {
  componentDidMount() {
    this.props.fetchHero();
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
            <Hero
              sectionContent={sectionContent}
            />
        }
      </div>
    );
  }
}

HeroContainer.defaultProps = {
  content: {},
};

HeroContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchHero: PropTypes.func.isRequired,
  content: PropTypes.object,
};

const mapStateToProps = state => ({
  isLoading: state.hero.isLoading,
  content: state.hero.content,
});

const mapDispatchToProps = dispatch => ({
  fetchHero: () => {
    dispatch(fetchHero());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeroContainer);
