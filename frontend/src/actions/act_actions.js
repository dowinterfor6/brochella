import * as actsApiUtil from '../util/acts_api_util';

export const RECEIVE_ACT = 'RECEIVE_ACT';

const receiveAct = (act) => ({
  type: RECEIVE_ACT,
  act
});

export const fetchAct = (actId) => (dispatch) => (
  actsApiUtil.fetchAct(actId).then((act) => dispatch(receiveAct(act)))
);