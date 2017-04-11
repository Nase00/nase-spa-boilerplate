/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';

import { createDevTools } from 'redux-devtools';

import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import SliderMonitor from 'redux-slider-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';
import DiffMonitor from 'redux-devtools-diff-monitor';
import Inspector from 'redux-devtools-inspector';
import Dispatcher from 'redux-devtools-dispatch';

import * as ExampleActions from '../ducks/example';
import * as NavigationActions from '../ducks/navigation';

const actions = {
  ...ExampleActions,
  ...NavigationActions
};

const DevTools = createDevTools(
  <DockMonitor
    defaultIsVisible={false}
    toggleVisibilityKey='alt-q'
    changePositionKey='alt-w'
    changeMonitorKey='alt-e'>
      <Inspector theme='tomorrow' supportImmutable/>
      <SliderMonitor keyboardEnabled/>
      <Dispatcher keyboardEnabled actionCreators={actions}/>
      <LogMonitor theme='tomorrow'/>
      <ChartMonitor keyboardEnabled/>
      <DiffMonitor keyboardEnabled/>
  </DockMonitor>
);

export default DevTools;
