import { RECEIVE_ACT } from '../actions/act_actions';

const actsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ACT:
      return action.act;
    default:
      return state;
  }
}

export default actsReducer;