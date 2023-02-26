import React, { useState } from 'react'
import Navigation from './navigation';
import About from './pages/About';
import Donate from './pages/Donate';
import Home from './pages/Home';
// import Login from './pages/Login';
import LoginForm from './loginform';

import {
  Container,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'

export default function FixedMenuLayout(){

  const [currentPage, handlePageChange] = useState("");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Donate":
        return <Donate />;
      case "Login":
        return <LoginForm />;
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
        <div className="content" >
          {renderPage(currentPage)}
        </div>
    </Container>

    <Segment inverted vertical style={{ margin: '2em 0em 0em', padding: '2em 0em', position: 'fixed', bottom: 0, width: '100%'}}>
      <Container textAlign='center'>
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