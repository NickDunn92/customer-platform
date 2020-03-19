import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export interface NavbarProps extends RouteComponentProps {
    user: any;
    onLogout: () => void;
}
 
const Navbar: React.FC<NavbarProps> = ({ user, onLogout, history }) => {

    const handleHomeClick = () => {
        history.push('/');
    }

    const handleLoginClick = () => {
        history.push('/login');
    }

    const handleProfileClick = () => {
        history.push('/profile');
    }

   const renderUserInformation = () => {
       if (user) {
           return (
                <>
                    <Menu.Item
                        onClick={handleHomeClick}
                        name='home'
                    >
                        Home
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item onClick={handleProfileClick}>{user.businessname}</Menu.Item>
                        <Menu.Item onClick={onLogout}>Log Out</Menu.Item>
                    </Menu.Menu>
                </>
           );
       } else {
           return (
                <>  
                    <Menu.Item position='right' onClick={handleLoginClick}>Log In</Menu.Item>
                </>
           )
       }
   }

    return (  
        <Menu stackable>
            {renderUserInformation()}
        </Menu>
    );
}

export default withRouter(Navbar)