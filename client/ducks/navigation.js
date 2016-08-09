import immutable from 'immutable';

import { handleAction } from '../utils';
import { DEFAULT_DOCUMENT_TITLE } from '../constants';

export const EMIT_DEVICE_WIDTH_UPDATE = 'EMIT_DEVICE_WIDTH_UPDATE';

export const emitDeviceWidthUpdate = () => ({
  type: EMIT_DEVICE_WIDTH_UPDATE
});

const initialState = immutable.fromJS({
  documentTitle: DEFAULT_DOCUMENT_TITLE,
  deviceWidth: document.body.clientWidth
});

const navigationReducer = (state = initialState, action) => {
  const reducers = {

  };

  return handleAction(state, action, reducers);
};

export default navigationReducer;
