import {combineReducers} from 'redux';
import characterListReducer from './characterListReducer';

const rootReducer = combineReducers({
  charactersList: characterListReducer,
});

const appReducer = (state, action) => {
  return rootReducer(state, action);
};

export default appReducer;
