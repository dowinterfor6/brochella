import axios from 'axios';

export const fetchUsersGroups = (userId) => {
  return axios.get(`api/users/${userId}/groups`)
};