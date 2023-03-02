import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import Auth from '../utils/auth'

const Navigation = ({ loggedIn, setLoggedIn }) => {
  return (
    <Menu fixed="top" inverted className='ui stackable menu' style={{ position: 'sticky'}}>
      <Menu.Item as={Link} to="/" header>
        <Image
          size="tiny"
          src={process.env.PUBLIC_URL + '/img/toslogo.png'}
          style={{ marginRight: '1.5em' }}
        />
        The Open Source
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/about">
          About
        </Menu.Item>
        {Auth.loggedIn() ? (
          <>
            <Menu.Item as="a" onClick={() => Auth.logout()}>
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item as={Link} to="/login">
              Login
            </Menu.Item>
            <Menu.Item as={Link} to="/signup">
              Signup
            </Menu.Item>
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Navigation;
