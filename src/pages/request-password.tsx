import * as React from 'react';
import { RequestPasswordForm, RequestPasswordFormData,  } from '../components';
import { Grid } from 'semantic-ui-react';
import userImage from '../user-image.png';

export interface RequestPasswordProps {
    handleRequestPassword: (data: RequestPasswordFormData) => void;
}
 
export const RequestPassword: React.FC<RequestPasswordProps> = ({ handleRequestPassword }) => {
    return (  
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <h1>Request Password</h1>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            <RequestPasswordForm onResetPassword={handleRequestPassword} />
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