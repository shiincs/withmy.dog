import {
  combineReducers
} from 'redux';

import * as api from '../../api';
import createList, * as fromList from './createList';
import byId, * as fromById from './byId';

// action type
export const FETCH_LIST_REQUEST = 'with-my-dog/list/FETCH_LIST_REQUEST';
export const FETCH_LIST_SUCCESS = 'with-my-dog/list/FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILURE = 'with-my-dog/list/FETCH_LIST_FAILURE';

// action creator
const fetchListRequest = category => ({
  type: FETCH_LIST_REQUEST,
  category,
});

const fetchListFailure = (category, message) => ({
  type: FETCH_LIST_FAILURE,
  category,
  message,
});

// reducers
const listByCategory = combineReducers({
  all: createList('all'),
  restaurant: createList('restaurant'),
  cafe: createList('cafe'),
  pub: createList('pub'),
});

const list = combineReducers({
  byId,
  listByCategory,
});

export default list;

export const getVisibleList = (state, category) => {
  const ids = fromList.getIds(state.list.listByCategory[category]);
  return ids.map(id => fromById.getListItem(state.list.byId, id));
};

export const getIsFetching = (state, category) => {
  return fromList.getIsFetching(state.list.listByCategory[category]);
};

export const getErrorMessage = (state, category) => {
  return fromList.getErrorMessage(state.list.listByCategory[category]);
};

// fetchList action
export const fetchList = category => async (dispatch, getState) => {
  if (getIsFetching(getState(), category)) {
    return Promise.resolve();
  }
  // fetch request
  try {
    dispatch(fetchListRequest(category));
    const response = await api.fetchList(category);

    dispatch({
      type: FETCH_LIST_SUCCESS,
      category,
      response,
    });
  } catch (error) {
    dispatch(fetchListFailure(category, error.message));
  }
};