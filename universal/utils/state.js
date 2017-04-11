/* eslint import/prefer-default-export:0 */

export const handleAction = (state, action, reducers) => (
  reducers[action.type] ? reducers[action.type]() : state
);
