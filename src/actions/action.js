import * as types from './types';
export const login = (id) => ({
  type: types.SET_CURRENT_USER,
  payload: id,
});
export const logout = () => ({
  type: types.RESET_CURRENT_USER,
});
