import React, { useState, useEffect } from 'react'
import Navigation from './navigation';
import About from './pages/About';
import Donate from './pages/Donate';
import Home from './pages/Home';
import Login from './pages/Login';

import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

export default function FixedMenuLayout(){

  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Donate":
        return <Donate />;
      case "Login":
        return <Login />;
      case "About":
        return <About />;
      default: 
        return <Home />;
    }
  };  

 return (
  <div>
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />


    <Container text style={{ marginTop: '7em' }}>
        <div className="content">
          {renderPage(currentPage)}
        </div>
    </Container>

    <Segment inverted vertical style={{ margin: '2em 0em 0em', padding: '2em 0em', position: 'fixed', bottom: 0, width: '100%'}}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src={process.env.PUBLIC_URL + '/img/toslogo.png'}/>
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
);
}