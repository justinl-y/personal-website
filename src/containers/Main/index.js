import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeroContainer from '../../containers/Hero';
import AboutContainer from '../../containers/About';
import DoContainer from '../../containers/Do';
import KnowContainer from '../../containers/Know';
import WorkContainer from '../../containers/Work';
import ContactContainer from '../../containers/Contact';

class Main extends Component {
  componentDidMount() {
    const { scrollTo } = this.props;

    if (scrollTo) {
      setTimeout(() => {
        this.scrollToDiv(scrollTo);
      }, 300);
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
      case 'contact':
        this.contactDivElement.scrollIntoView(scrollProperties);
        break;
      default:
    }
  }

  render() {
    return (
      <div className="main">
        <HeroContainer />
        <AboutContainer divRef={el => (this.aboutDivElement = el)} />
        <DoContainer divRef={el => (this.doDivElement = el)} />
        <KnowContainer divRef={el => (this.knowDivElement = el)} />
        <WorkContainer divRef={el => (this.workDivElement = el)} />
        <ContactContainer divRef={el => (this.contactDivElement = el)} />
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
