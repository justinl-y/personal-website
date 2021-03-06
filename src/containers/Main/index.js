import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeroContainer from '../../containers/Hero';
import AboutContainer from '../../containers/About';
import DoContainer from '../../containers/Do';
import KnowContainer from '../../containers/Know';
import WorkContainer from '../../containers/Work';
import FindContainer from '../../containers/Find';

// import styles from './styles.css';

class Main extends Component {
  componentDidMount() {
    const { scrollTo } = this.props;

    if (scrollTo) {
      setTimeout(() => {
        this.scrollToDiv(scrollTo);
      }, 500);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { scrollTo } = nextProps;

    if (scrollTo) {
      this.scrollToDiv(scrollTo);
    }
  }

  scrollToDiv(scrollTo) {
    const scrollProperties = {
      block: 'start',
      behavior: 'smooth',
    };

    switch (scrollTo) {
      case 'hero':
        this.heroDivElement.scrollIntoView(scrollProperties);
        break;
      case 'about':
        this.aboutDivElement.scrollIntoView(scrollProperties);
        break;
      case 'do':
        this.doDivElement.scrollIntoView(scrollProperties);
        break;
      case 'know':
        this.knowDivElement.scrollIntoView(scrollProperties);
        break;
      case 'work':
        this.workDivElement.scrollIntoView(scrollProperties);
        break;
      case 'find':
        this.contactDivElement.scrollIntoView(scrollProperties);
        break;
      default:
    }
  }

  render() {
    return (
      <div className="container">
        <HeroContainer divRef={el => (this.heroDivElement = el)} />
        <DoContainer divRef={el => (this.doDivElement = el)} />
        <KnowContainer divRef={el => (this.knowDivElement = el)} />
        <WorkContainer divRef={el => (this.workDivElement = el)} />
        <AboutContainer divRef={el => (this.aboutDivElement = el)} />
        <FindContainer divRef={el => (this.contactDivElement = el)} />
      </div>
    );
  }
}

Main.defaultProps = {
  scrollTo: null,
};

Main.propTypes = {
  scrollTo: PropTypes.string,
};

export default Main;
