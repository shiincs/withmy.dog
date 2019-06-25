import {
  combineReducers
} from 'redux'

import list from './list';
import user from './user';
import addPlace from './addPlace';

export default combineReducers({
  list,
  user,
  addPlace
})