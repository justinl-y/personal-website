import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Main from '../Main';
import Footer from '../../components/Footer';
import NotFound from '../../components/NotFound';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Main />}
      />
      <Route
        path="/about"
        render={() => <Main scrollTo="about" />}
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
        path="/contact"
        render={() => <Main scrollTo="contact" />}
      />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default withRouter(connect(
  null,
)(App));
