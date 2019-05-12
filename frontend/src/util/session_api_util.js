import axios from 'axios';
const cors = require('cors');

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  // return axios.post('http://localhost:5000/api/users/register', userData, {mode: cors});
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  // return axios.post('http://localhost:5000/api/users/login', userData, {mode: cors});
  return axios.post('/api/users/login', userData);
};