import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import MainPage from './main/main_page';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

// const App = () => (
class App extends React.Component {
  render() {
    return (
      <div>
        <NavBarContainer />
        <Switch>
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <AuthRoute exact path='/signup' component={SignupFormContainer} />
          <AuthRoute exact path='/' component={MainPage} />
        </Switch>
      </div>
    )
  }
}

// );

export default App;