import React from 'react'
import {Container, Image, List, Segment} from 'semantic-ui-react'


export default function Footer () {

    return (

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

    )


}