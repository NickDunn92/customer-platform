import * as React from 'react';
import { ForgotPasswordForm, ForgotPasswordFormData,  } from '../components';
import { Grid } from 'semantic-ui-react';
import userImage from '../user-image.png';

export interface ForgotPasswordProps {
    handleResetPassword: (data: ForgotPasswordFormData) => void;
}
 
export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ handleResetPassword }) => {
    return (  
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <h1>Reset Password</h1>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            <ForgotPasswordForm onResetPassword={handleResetPassword} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <img className='user-image' src={userImage} alt="manatdesk"/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}