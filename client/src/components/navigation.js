
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';

const Navigation = () => {
  return (
    <Menu fixed='top' inverted >
          <Menu.Item as='a' header>
         <Image size='tiny' src={process.env.PUBLIC_URL + '/img/toslogo.png'} style={{ marginRight: '1.5em' }} />
           The Open Source
         </Menu.Item>
      <Menu.Menu position='right'>
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
      </Menu.Menu>
    </Menu>
  );
};

export default Navigation;




