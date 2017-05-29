import fileStore from './file-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  fileStore
});

export default rootReducer;
