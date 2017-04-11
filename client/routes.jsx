/* globals document */
import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import history from './config/history';
import store from './store';

import Body from './components/body';
import ExampleContainer from './components/example/container';

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Body location={history.location}>
        <Route path='/' component={ExampleContainer}/>
      </Body>
    </ConnectedRouter>
  </Provider>
);

export default Routes;
