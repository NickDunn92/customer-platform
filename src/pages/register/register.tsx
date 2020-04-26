import * as React from 'react';
import { RegisterForm, RegisterFormData } from '../../components';
import { Grid, List, Header } from 'semantic-ui-react';
import './register.css';

export interface RegisterProps {
    handleRegister: (data: RegisterFormData) => void;
}
 
export const Register: React.FC<RegisterProps> = ({ handleRegister }) => {
    return (  
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <h1>Try for Free</h1>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <RegisterForm onRegister={handleRegister} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column className='advert'>
                                <Header>
                                    Everything You Need In A Single Tool 
                                </Header>
                                    <List>
                                        <List.Item>
                                            <List.Icon name='check' />
                                            <List.Content>Loreum Ipsum Dolar Sit Amet</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name='check' />
                                            <List.Content>Loreum Ipsum Dolar Sit Amet</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name='check' />
                                            <List.Content>Loreum Ipsum Dolar Sit Amet</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name='check' />
                                            <List.Content>Loreum Ipsum Dolar Sit Amet</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name='check' />
                                            <List.Content>Loreum Ipsum Dolar Sit Amet</List.Content>
                                        </List.Item>
                                    </List>
                                <Header>All this and much more...</Header>
                                <Header>
                                    Trusted by 1000's of construction businesses all over the world!
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}