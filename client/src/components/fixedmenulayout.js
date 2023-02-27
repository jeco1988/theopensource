
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './navigation';
import About from './pages/About';
import Donate from './pages/Donate';
import Home from './pages/Home';
import LoginForm from './loginform';
import SignUpForm from './signupform'; //original signupform
// import SignUpFormv2 from './drafts/signupform'
import {
  Container,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';

export default function FixedMenuLayout() {
  return (
    <Router>
      
        <Navigation />

        <Container text style={{ marginTop: '7em' }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />

          </Routes>
        </Container>

        <Segment inverted vertical style={{ margin: '2em 0em 0em', padding: '2em 0em', position: 'fixed', bottom: 0, width: '100%' }}>
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
    </Router>
  );
}