/* globals document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import history from './config/history';
import store from './store';

import Body from './components/body';
import ExampleContainer from './components/example/container';

injectTapEventPlugin();

const node = document.getElementById('root');

const Application = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Body}>
        <IndexRoute component={ExampleContainer}/>
      </Route>
    </Router>
  </Provider>
);

// Initialze client
ReactDOM.render(Application, node);
