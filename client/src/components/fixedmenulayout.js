
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './navigation';
import About from './pages/About';
import Donate from './pages/Donate';
import Home from './pages/Home';
import LoginForm from './loginform';
import SignUpForm from './signupform'; //original signupform
// import SignUpFormv2 from './drafts/signupform'
import Footer from './Footer';
import {
  Container,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';

export default function FixedMenuLayout() {

  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <Router>
      
        <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

        <Container text style={{ marginTop: '7em' }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />

          </Routes>
        </Container>
        <Footer />

    </Router>
  );
}