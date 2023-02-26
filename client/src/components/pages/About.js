import React from 'react';
import { Container, Header } from 'semantic-ui-react';

export default function About() {
  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>About</Header>
      <p>ABOUT This is the about page for our application.</p>
      <p>You can use this page to provide information about your project, your team, or any other details you want to share with your users.</p>
    </Container>
  );
}