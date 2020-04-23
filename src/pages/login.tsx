import * as React from 'react';
import { LoginForm, LoginFormData } from '../components';

export interface LoginProps {
    handleLogin: (data: LoginFormData) => void;
}
 
export const Login: React.FC<LoginProps> = ({ handleLogin }) => {
    return (  
        <>
            <LoginForm onLogin={handleLogin} />
        </>
    );
}