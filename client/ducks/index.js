import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import navigationReducer from './navigation';
import exampleReducer from './example';

export default combineReducers({
  navigationReducer,
  exampleReducer,
  routerReducer
});
