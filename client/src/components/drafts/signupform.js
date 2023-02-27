import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
// import { CREATE_USER } from '../utils/mutations';
import Auth from '../../utils/auth';


const SignUpFormv2 = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    fullName: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Grid textAlign='center' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
        <Image src='/img/toslogo.png' /> Sign up here!
      </Header>
      <Form size='large' onSubmit={handleFormSubmit}>
        <Segment stacked>
          <Form.Input fluid icon='user' name="email" iconPosition='left' placeholder='E-mail address' value={formState.email} onChange={handleChange} type="text"/>
          <Form.Input fluid icon='lock' name="password" iconPosition='left' placeholder='Password' type='password' value={formState.password} onChange={handleChange} />
          <Form.Input fluid icon='lock' name="username" iconPosition='left' placeholder='GitHub Username' value={formState.username} onChange={handleChange} type="text"/>
          <Form.Input fluid icon='lock' name="fullName" iconPosition='left' placeholder='Full Name' value={formState.fullName} onChange={handleChange} type="text"/>
          <Button color='blue' fluid size='large' type="submit">
            Submit
          </Button>
        </Segment>
      </Form>
      {error && (<Message negative>{error.message}</Message>)}
      <Message>
      Already a user? <Link to='/login'>Log In</Link>
      </Message>
    </Grid.Column>
  </Grid>
  );
};

export default SignUpFormv2;
