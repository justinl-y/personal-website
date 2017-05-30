import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../containers/Header';
import Main from '../Main';
import FooterContainer from '../../containers/Footer';
import NotFound from '../../components/NotFound';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Main scrollTo="hero" />}
      />
      <Route
        path="/do"
        render={() => <Main scrollTo="do" />}
      />
      <Route
        path="/know"
        render={() => <Main scrollTo="know" />}
      />
      <Route
        path="/work"
        render={() => <Main scrollTo="work" />}
      />
      <Route
        path="/about"
        render={() => <Main scrollTo="about" />}
      />
      <Route
        path="/find"
        render={() => <Main scrollTo="find" />}
      />
      <Route component={NotFound} />
    </Switch>
    <FooterContainer />
  </div>
);

export default withRouter(connect(
  null,
)(App));
