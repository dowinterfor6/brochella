import * as GroupAPIUtil from '../util/group_api_util';

export const RECEIVE_OWN_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';

export const receiveOwnGroups = (payload) => ({
  type: RECEIVE_OWN_GROUPS, 
  payload
});

export const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

export const removeGroup = (groupId) => ({
  type: REMOVE_GROUP, 
  groupId
});

// export const fetchOwnGroups = (userId) => (dispatch)  => (
//   GroupAPIUtil.fetchOwnGroups(userId).then(groups => dispatch(receiveOwnGroups(groups)))
// );

export const fetchGroup = (id) => (dispatch) => (
  GroupAPIUtil.fetchGroup(id).then(group => dispatch(receiveGroup(group)))
);

export const createGroup = (group) => (dispatch) => (
  GroupAPIUtil.createGroup(group).then(group => dispatch(receiveGroup(group)))
);

export const updateGroup = (group) => (dispatch) => (
  GroupAPIUtil.updateGroup(group).then(group => dispatch(receiveGroup(group)))
);

export const deleteGroup = (groupId) => (dispatch) => (
  GroupAPIUtil.deleteGroup(groupId).then(group => dispatch(removeGroup(group.id)))
);
