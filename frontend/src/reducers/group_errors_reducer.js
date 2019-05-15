import { RECEIVE_GROUP, RECEIVE_GROUP_ERRORS } from '../actions/group_actions';

const _nullErrors = [];

const GroupErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUP_ERRORS:
      return action.errors;
    case RECEIVE_GROUP:
      return _nullErrors;
    default:
      return state;
  }
};

export default GroupErrorsReducer;