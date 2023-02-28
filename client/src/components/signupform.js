import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { CREATE_USER } from "../utils/mutations";
let dataFlag = false;

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [createUser, { loading, error }] = useMutation(CREATE_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await createUser({
        variables: {
          email,
          password,
          username,
          fullname,
        },
      });
      console.log(data);
      dataFlag = true;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid
      textAlign="center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center">
          <Image src="/img/toslogo.png" /> Sign up here!
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          {dataFlag ? (
            <p>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="GitHub Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
              />

              <Button color="blue" fluid size="large" loading={loading}>
                Submit
              </Button>
            </Segment>
          )}
        </Form>
        {error && <Message negative>{error.message}</Message>}
        <Message>
          Already a user? <Link to="/login">Log In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default SignUpForm;
