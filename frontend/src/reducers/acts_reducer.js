import { RECEIVE_ACT, REMOVE_ACTS } from '../actions/act_actions';
import merge from 'lodash/merge';

const actsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ACT:
      // TODO: CHECK TYPE
      return merge({}, state, { [action.act.data._id]: action.act.data});
    // case RECEIVE_GROUP_ACTS:
    //   let nextState = {};
    //   action.acts.data.acts.map((actId, idx) => (
    //     nextState = merge({}, nextState, { [idx]: actId })
    //   ));
    //   return nextState;
    case REMOVE_ACTS:
      return {};
    default:
      return state;
  }
}

export default actsReducer;