import React from 'react';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import './App.css';
import { Login, Homepage, Register, Profile, ForgotPassword } from './pages';
import { LoginFormData } from './components/form';

export interface AppProps extends RouteComponentProps<any> {}

const App: React.FC<AppProps> = ({ history }) => {
  
  const handleLogin = (data: LoginFormData) => {
    history.push('/');
  }

  const handleLogout = () => {
    history.push('/login')
  }
  
  return (
    <div className='App'>
      <div className='page-content'>
        <Switch>
          <Route exact path='/login' render={(props) => <Login {...props} handleLogin={handleLogin} />} />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/forgotpassword' component={ForgotPassword} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
