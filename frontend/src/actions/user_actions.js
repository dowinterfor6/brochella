import * as userApiUtil from '../util/user_api_util';

export const RECEIVE_USER_GROUPS = 'RECEIVE_USER_GROUPS';

const receiveUserGroups = (groups) => {
  return {
    type: RECEIVE_USER_GROUPS,
    groups
  };
};

export const fetchUserGroups = (userId) => (dispatch) => (
  userApiUtil.fetchUsersGroups(userId)
    .then(
      (rawData) => dispatch(receiveUserGroups(rawData.data.groups))
    )
);