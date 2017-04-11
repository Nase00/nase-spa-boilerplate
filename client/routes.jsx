/* globals document */
import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import { Provider } from 'react-redux';

import history from './config/history';
import store from './store';

import Body from './components/body';
import ExampleContainer from './components/example/container';

const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Body}>
        <IndexRoute component={ExampleContainer}/>
      </Route>
    </Router>
  </Provider>
);

export default Routes;
