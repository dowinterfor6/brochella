import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

//TESTING
import * as sessionApiUtil from './util/session_api_util';
// import { fetchUsersGroups } from './util/user_api_util';
import { fetchUserGroups } from './actions/user_actions';
// import { fetchAct } from './util/acts_api_util';
import { fetchAct } from './actions/act_actions';
import { fetchGroup } from './actions/group_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: {isAuthenticated: true, user: decodedUser }};
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/';
    }
  } else {
    store = configureStore({});
  }

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);

  //TESTING
  window.login = sessionApiUtil.login;
  window.signup = sessionApiUtil.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // window.fetchUsersGroups = fetchUsersGroups;
  window.fetchUsersGroups = fetchUserGroups;
  window.fetchGroup = fetchGroup;

  // window.fetchAct = fetchAct;
  window.fetchAct = fetchAct;
});