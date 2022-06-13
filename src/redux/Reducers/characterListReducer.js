import {CHARACTER_LIST} from '../Actions/actionTypes';

const initialState = {
  charactersList: [],
};

const characterListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_LIST: {
      return {
        ...state,
        charactersList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default characterListReducer;
