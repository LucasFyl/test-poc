import * as types from '../actions/action-types';

export const defaultState = {
  file: null,
  test: 'ok'
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_FILE:
      return [...state, Object.assign({}, action.person)];
    default:
      return state;
  }
};
