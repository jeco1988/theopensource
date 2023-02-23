import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const SignUpForm = () => (
  <Grid textAlign='center' style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
        <Image src='/img/toslogo.png' /> Sign up here!
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
            <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='GitHub Username'
          />
            <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='First name, Last name'
          />
          <Button color='blue' fluid size='large'>
            Submit
          </Button>
        </Segment>
      </Form>
      <Message>
        Already a user? <a href='#'>Log In</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default SignUpForm