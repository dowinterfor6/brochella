import axios from 'axios';

export const fetchAct = (groupId) => {
  return axios.get(`/api/acts/${groupId}`);
}

// export const fetchGroupActs = (groupId) => {
//   return axios.get(`/api/groups/${groupId}/acts`);
// }