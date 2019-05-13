import axios from 'axios';

export const fetchOwnGroups = (userId) => {
  return axios.get(`/api/groups/user/${userId}`)
};

export const fetchGroup = (groupId) => {
  return axios.get(`/api/group/${groupId}`)
};

export const createGroup = (group) => {
  return axios.post('/api/groups', group)
}

export const updateGroup = (group) => {
  return axios.patch(`/api/group/${group.id}`, group)
}

export const deleteGroup = (id) => {
  return axios.delete(`/api/groups/${id}`)
}