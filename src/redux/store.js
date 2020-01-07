import rootReducer from './rootReducer';
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

export default function configureStore() {

  const helperMiddleware = createReactNavigationReduxMiddleware(state => state.nav);
  const middlewares = [thunkMiddleware, helperMiddleware].filter(Boolean);

  const middleWare = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, middleWare);

  return store;
}
