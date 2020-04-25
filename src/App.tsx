import React from 'react';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import './App.css';
import { SignIn, Homepage, Register, Profile, ForgotPassword } from './pages';
import { SignInFormData } from './components/form';
import Logo from './excel.png';

export interface AppProps extends RouteComponentProps<any> {}

const App: React.FC<AppProps> = ({ history }) => {
  
  const handleSignIn = (data: SignInFormData) => {
    history.push('/');
  }

  const handleSignOut = () => {
    history.push('/signin')
  }
  
  return (
    <div className='App'>
      <div className='page-content'>
        <img src={Logo} alt="Logo"/>
          <Switch>
            <Route exact path='/signin' render={(props) => <SignIn {...props} handleSignIn={handleSignIn} />} />
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
