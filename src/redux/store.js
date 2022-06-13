import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducer from './Reducers';

const configureStore = () => {
  const middleware = [thunk];
  return createStore(appReducer, applyMiddleware(...middleware));
};

export {configureStore};
