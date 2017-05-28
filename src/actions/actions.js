import * as types from './action-types';

export const addFile = (file) => {
  return {
    type: types.ADD_FILE,
    file
  };
}
