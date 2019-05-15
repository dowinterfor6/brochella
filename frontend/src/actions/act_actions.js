import * as actsApiUtil from '../util/acts_api_util';

export const RECEIVE_ACT = 'RECEIVE_ACT';
// export const RECEIVE_GROUP_ACTS = 'RECEIVE_GROUP_ACTS';
export const REMOVE_ACTS = 'REMOVE_ACTS';

const receiveAct = (act) => ({
  type: RECEIVE_ACT,
  act
});

// const receiveGroupActs = (acts) => ({
//   type: RECEIVE_GROUP_ACTS,
//   acts
// });

const removeActs = () => ({
  type: REMOVE_ACTS
})

export const fetchAct = (actId) => (dispatch) => (
  actsApiUtil.fetchAct(actId).then((act) => dispatch(receiveAct(act)))
);

// export const fecthGroupActs = (groupId) => (dispatch) => (
//   actsApiUtil.fetchGroupActs(groupId).then((acts) => dispatch(receiveGroupActs(acts)))
// );

export const deleteActs = (actId = '') => (dispatch) => (
  actsApiUtil.fetchAct(actId).then(() => dispatch(removeActs()))
)