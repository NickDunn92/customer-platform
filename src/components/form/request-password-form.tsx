import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Input, Button, Header } from 'semantic-ui-react';
import * as yup from 'yup';

export interface RequestPasswordFormProps {
    onResetPassword: (data: RequestPasswordFormData) => void;
}

export type RequestPasswordFormData = {
    email: string,
    password: string,
}

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
})
 
export const RequestPasswordForm: React.FC<RequestPasswordFormProps> = ({ onResetPassword }) => {
    
    const { handleSubmit, control, errors } = useForm<RequestPasswordFormData>({
        validationSchema: schema
    });

    const onSubmit = (data: RequestPasswordFormData) => {
        onResetPassword(data);
    }
    
    return (  
        <form onSubmit={handleSubmit(onSubmit)}>
             <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Header textAlign={'center'} size={'large'}>Enter your email address below and we'll send you<br /> a link with your password</Header>
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
                            REQUEST PASSWORD
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </form>
    );
}