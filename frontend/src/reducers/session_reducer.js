import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';
import { initialState } from './session_api_reducer';

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      }
    default:
      return state;
  }
}

export default sessionReducer;