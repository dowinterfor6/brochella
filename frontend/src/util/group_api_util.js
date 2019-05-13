import axios from 'axios';

export const fetchOwnGroups = (id) => {
  return axios.get(`/api/users/${id}/groups`)
};

export const fetchGroup = (id) => {
  return axios.get(`/api/groups/user/${id}`)
};

export const createGroup = group => {
  return axios.post('/api/groups', group)
}

export const updateGroup = group => {
  return axios.patch(`api/groups/${group.id}`, group)
}

export const deleteGroup = id => {
  return axios.delete(`api/groups/user/${id}`)
}