import * as React from 'react';
import { SignInForm, SignInFormData } from '../../components';
import './signin.css';
import userImage from '../../user-image.png';
import { Grid } from 'semantic-ui-react';

export interface SignInProps {
    handleSignIn: (data: SignInFormData) => void;
}
 
export const SignIn: React.FC<SignInProps> = ({ handleSignIn }) => {
    return (  
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <h1>Welcome...</h1>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <SignInForm onSignIn={handleSignIn} />
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