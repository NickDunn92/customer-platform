import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Input, Button, Header, Checkbox } from 'semantic-ui-react';
import * as yup from 'yup';

export interface RegisterFormProps {
    onRegister: (data: RegisterFormData) => void;
}
 
export type RegisterFormData = {
    name: string,
    email: string,
    password: string,
}

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
})

export const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {

    const { handleSubmit, control, errors } = useForm<RegisterFormData>({
        validationSchema: schema
    });

    const onSubmit = (data: RegisterFormData) => {
        onRegister(data);
    }

    return (  
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Header textAlign={'center'} size={'medium'}>Start a 7-day free trial to access all our features<br /> without spending a penny. (No credit card required)</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller
                            as={<Input placeholder='Name' />}
                            name="name"
                            control={control}
                            defaultValue=""
                        />
                        {errors.name && <p>Please enter your name</p>}
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
                        {errors.email && <p>Please enter a valid email address</p>}
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
                        {errors.password && <p>Please enter a valid password</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Checkbox label='Accept our Terms and Conditions' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button primary>
                            CREATE FREE ACCOUNT
                        </Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <p>Already have a login? <a href="signin">Log In Here</a></p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </form>
    );
}
