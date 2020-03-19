import * as React from 'react';
import { RegisterForm, RegisterFormData } from '../components';

export interface RegisterProps {
    handleRegister: (data: RegisterFormData) => void;
}
 
export const Register: React.FC<RegisterProps> = ({ handleRegister }) => {
    return (  
        <>
            <RegisterForm onRegister={handleRegister} />
        </>
    );
}