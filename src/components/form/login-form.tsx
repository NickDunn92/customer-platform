import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Input, Button, Header, Checkbox } from 'semantic-ui-react';
import * as yup from 'yup';

export interface LoginFormProps {
    onLogin: (data: LoginFormData) => void;
}

export type LoginFormData = {
    email: string,
    password: string,
    
}

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
})
 
export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {

    const { handleSubmit, control, errors } = useForm<LoginFormData>({
        validationSchema: schema
    });

    const onSubmit = (data: LoginFormData) => {
        onLogin(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Header textAlign={'center'} size={'large'}>Welcome...</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller
                            as={<Input icon='at' placeholder='email address' />}
                            name="email"
                            control={control}
                            defaultValue=""
                            type="email"
                        />
                        {errors.email && <p>Please enter a valid email address</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller
                            as={<Input icon='lock' placeholder='password' />}
                            name="password"
                            control={control}
                            defaultValue=""
                            type='password'
                        />
                        {errors.password && <p>Please enter a valid password</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Checkbox label='Keep me logged in' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <a href='/forgotpassword'>Forgot your password?</a>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button primary>
                            Login
                        </Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <p>Don't have an account? <a href="register">Sign Up Here</a></p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </form>
    );
}