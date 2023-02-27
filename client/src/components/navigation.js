// import React from 'react'
// import {Container, Image, Menu} from 'semantic-ui-react'

// export default function Navigation (props) {
//     const tabs = ["Home", "About", "Login", "Donate",];
//     return (
//     <Menu  fixed='top' inverted>
//     <Container>
//         <Menu.Item as='a' header>
//         <Image size='mini' src={process.env.PUBLIC_URL + '/img/toslogo.png'} style={{ marginRight: '1.5em' }} />
//           The Open Source
//         </Menu.Item>
//         {tabs.map((tab) => (
//         <Menu.Menu position='float right'>  
//         <Menu.Item as='a' onClick={() => props.handlePageChange(tab)}> {tab} </Menu.Item>
//         </Menu.Menu>
//         ))}

//       </Container>
//       </Menu>

//     )
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navigation = () => {
  return (
    <Menu fixed='top' inverted>
      <Menu.Item as={Link} to='/'>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to='/about'>
        About
      </Menu.Item>
      <Menu.Item as={Link} to='/donate'>
        Donate
      </Menu.Item>
      <Menu.Item as={Link} to='/login'>
        Login
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;




