import {CHARACTER_LIST} from './actionTypes';

export const setCharacterList = payload => {
  return {type: CHARACTER_LIST, payload: payload};
};
