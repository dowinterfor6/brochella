import { RECEIVE_OWN_GROUPS, RECEIVE_GROUP, REMOVE_GROUP } from '../actions/group_actions';
import merge from 'lodash/merge';

const groupsReducer = (state={}, action) => {
  Object.freeze(state); 
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_OWN_GROUPS:
      return action.payload.groups;
    case RECEIVE_GROUP:
      let nextState = merge({}, state, { [action.group.id]: action.group })
      return nextState;
    case REMOVE_GROUP:
      delete nextState[action.groupId];
      return nextState;
    default:
      return state;
  }
}

export default groupsReducer;