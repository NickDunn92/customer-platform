import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Input, Button, Header } from 'semantic-ui-react';
import * as yup from 'yup';

export interface LoginFormProps {
    onLogin: (data: LoginFormData) => void;
}

export type LoginFormData = {
    businessname: string,
    password: string,
    
}

const schema = yup.object().shape({
    businessname: yup.string().required(),
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
                        <Header textAlign={'center'} size={'large'}>Login</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller
                            as={<Input icon='user' placeholder='Business Name' />}
                            name="businessname"
                            control={control}
                            defaultValue=""
                        />
                        {errors.businessname && <p>Please enter a valid business name</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller
                            as={<Input icon='lock' placeholder='Password' />}
                            name="password"
                            control={control}
                            defaultValue=""
                        />
                        {errors.password && <p>Please enter a valid password</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button>
                            Login
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </form>
    );
}