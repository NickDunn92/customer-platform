import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Input, Button, Header } from 'semantic-ui-react';
import * as yup from 'yup';

export interface ForgotPasswordFormProps {
    onResetPassword: (data: ForgotPasswordFormData) => void;
}

export type ForgotPasswordFormData = {
    email: string,
    password: string,
}

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
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
                        <Header textAlign={'center'} size={'large'}>Enter your email address below and we'll send you<br /> a link to reset your password</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller
                            as={<Input placeholder='Email address' />}
                            name="email"
                            control={control}
                            defaultValue=""
                            type="email"
                        />
                        {errors.email && <p>Please enter your email address</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller
                            as={<Input placeholder='Password' />}
                            name="password"
                            control={control}
                            defaultValue=""
                            type="password"
                        />
                        {errors.password && <p>Please enter your password</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button primary>
                            RESET PASSWORD
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </form>
    );
}