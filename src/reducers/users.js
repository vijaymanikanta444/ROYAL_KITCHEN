import * as types from '../actions/types';
import list from '../jsons/users.json';

let initialState = {
  list,
  currentUserId: null,
};
export default (state = initialState, action) => {
  // console.log('test498', state);

  switch (action.type) {
    case types.FETCHED_USERS:
      return { ...state, list: action.payload };
    case types.SET_CURRENT_USER:
      return { ...state, currentUserId: action.payload };
    case types.RESET_CURRENT_USER:
      return { ...state, currentUserId: null };
    default:
      return state;
  }
};
