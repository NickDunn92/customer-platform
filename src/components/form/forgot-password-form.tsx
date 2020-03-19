import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Input, Button, Header } from 'semantic-ui-react';
import * as yup from 'yup';

export interface ForgotPasswordFormProps {
    onResetPassword: (data: ForgotPasswordFormData) => void;
}

export type ForgotPasswordFormData = {
    currentpassword: string,
    newpassword: string,
    confirmpassword: string,
}

const schema = yup.object().shape({
    currentpassword: yup.string().required(),
    newpassword: yup.string().required(),
    confirmpassword: yup.string().required(),
})
 
export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onResetPassword }) => {
    
    const { handleSubmit, control, errors } = useForm<ForgotPasswordFormData>({
        validationSchema: schema
    });

    const onSubmit = (data: ForgotPasswordFormData) => {
        onResetPassword(data);
    }
    
    return (  
        <form onSubmit={handleSubmit(onSubmit)}>
             <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Header textAlign={'center'} size={'large'}>Reset Password</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller
                            as={<Input placeholder='Current Password' />}
                            name="Current Password"
                            control={control}
                            defaultValue=""
                        />
                        {errors.currentpassword && <p>Please enter your current password</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller
                            as={<Input placeholder='New Password' />}
                            name="New Password"
                            control={control}
                            defaultValue=""
                        />
                        {errors.newpassword && <p>Please enter a new password</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller
                            as={<Input placeholder='Confirm Password' />}
                            name="Confirm Password"
                            control={control}
                            defaultValue=""
                        />
                        {errors.confirmpassword && <p>Please confirm your new password</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button>
                            Confirm
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </form>
    );
}