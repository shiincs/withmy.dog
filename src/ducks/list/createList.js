import {
  combineReducers
} from 'redux';

import {
  FETCH_LIST_FAILURE,
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
} from './index';

const createList = category => {
  /* ids reducer */
  const ids = (state = [], action) => {
    switch (action.type) {
      case FETCH_LIST_SUCCESS:
        return category === action.category ?
          action.response.map(item => item.id) :
          state;
      default:
        return state;
    }
  };

  /* isFetching reducer(for loading indicator) */
  const isFetching = (state = false, action) => {
    if (action.category !== category) {
      return state;
    }
    switch (action.type) {
      case FETCH_LIST_REQUEST:
        return true;
      case FETCH_LIST_SUCCESS:
      case FETCH_LIST_FAILURE:
        return false;
      default:
        return state;
    }
  };

  /* errorMessage reducer */
  const errorMessage = (state = null, action) => {
    if (action.category !== category) {
      return state;
    }
    switch (action.type) {
      case FETCH_LIST_FAILURE:
        return action.message;
      case FETCH_LIST_REQUEST:
      case FETCH_LIST_SUCCESS:
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  });
};

export default createList;

export const getIds = state => state.ids;
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;