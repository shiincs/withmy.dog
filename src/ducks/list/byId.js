import {
  FETCH_LIST_SUCCESS
} from './index';

const byId = (state = {}, action) => {
  const nextState = {
    ...state
  };
  switch (action.type) {
    case FETCH_LIST_SUCCESS:
      action.response.forEach(item => {
        nextState[item.id] = item;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getListItem = (state, id) => state[id];