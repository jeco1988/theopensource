import React from 'react'
import {Container, Image, Menu} from 'semantic-ui-react'

export default function Navigation (props) {
    const tabs = ["Home", "About", "Login", "Donate"];
    return (
    <Menu  fixed='top' inverted>
    <Container>
        <Menu.Item as='a' header>
        <Image size='mini' src={process.env.PUBLIC_URL + '/img/toslogo.png'} style={{ marginRight: '1.5em' }} />
          The Open Source
        </Menu.Item>
        {tabs.map((tab) => (
        <Menu.Menu position='right'>  
        <Menu.Item as='a' onClick={() => props.handlePageChange(tab)}
          className={props.currentPage === tab ? "nav-link active" : "nav-link"} >
          {tab} </Menu.Item>
        </Menu.Menu>
        ))}

      </Container>
      </Menu>

    )
}