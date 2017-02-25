import immutable from 'immutable';

import { handleAction } from '../utils';

const initialState = immutable.fromJS({});

const clientsReducer = (state = initialState, action) => {
  const reducers = {

  };

  return handleAction(state, action, reducers);
};

export default clientsReducer;
