import immutable from 'immutable';

import { handleAction } from '../utils';

export { push } from 'react-router-redux';

const initialState = immutable.fromJS({
  helloWorldMessage: 'Hello, world!'
});

const exampleReducer = (state = initialState, action) => {
  const reducers = {

  };

  return handleAction(state, action, reducers);
};

export default exampleReducer;
