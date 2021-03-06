import types from '../constants/actionTypes';

export default (state = {friends: []}, action = {}) => {
  switch (action.type) {
    case types.SET_USER:
    console.log(action.user);
      return {
        ...state,
        user: action.user
      }
    case types.GET_USERS:
      return {
        ...state,
        users: action.users
      }
    default:
      return state;
  }
}
