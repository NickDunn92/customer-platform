import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Input, Button, Header } from 'semantic-ui-react';
import * as yup from 'yup';

export interface RegisterFormProps {
    onRegister: (data: RegisterFormData) => void;
}
 
export type RegisterFormData = {
    firstname: string,
    lastname: string,
    businessname: string,
    email: string,
    password: string,
}

const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    businessname: yup.string().required(),
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
                        <Header textAlign={'center'} size={'large'}>Register</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller
                            as={<Input placeholder='First Name' />}
                            name="firstname"
                            control={control}
                            defaultValue=""
                        />
                        {errors.firstname && <p>Please enter a valid first name</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller
                            as={<Input placeholder='Last Name' />}
                            name="lastname"
                            control={control}
                            defaultValue=""
                        />
                        {errors.lastname && <p>Please enter a valid last name</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller
                            as={<Input placeholder='Business Name' />}
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
                            as={<Input placeholder='Email' />}
                            name="email"
                            control={control}
                            defaultValue=""
                        />
                        {errors.email && <p>Please enter a valid email</p>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Controller
                            as={<Input placeholder='Password' />}
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
                            Register
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </form>
    );
}
