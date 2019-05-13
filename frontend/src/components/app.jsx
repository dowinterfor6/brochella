import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPage from './main/main_page';
import NavBarContainer from './nav/navbar_container';
import GroupIndexContainer from './groups/group_index_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path='/groups' component={GroupIndexContainer} />
      <AuthRoute exact path='/' component={MainPage} />
    </Switch>
  </div>
);


export default App;