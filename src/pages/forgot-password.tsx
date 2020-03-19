import * as React from 'react';
import { ForgotPasswordForm, ForgotPasswordFormData,  } from '../components';

export interface ForgotPasswordProps {
    handleResetPassword: (data: ForgotPasswordFormData) => void;
}
 
export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ handleResetPassword }) => {
    return (  
        <>
            <ForgotPasswordForm onResetPassword={handleResetPassword} />
        </>
    );
}