import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
/* for dev */
// import {
//   composeWithDevTools
// } from 'redux-devtools-extension';

import rootReducer from '../ducks';

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

/* for dev */
// const store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(...middlewares)
// ));

export default store;