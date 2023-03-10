import React from 'react'
import {Container, Image, List, Segment} from 'semantic-ui-react'
import { Link } from "react-router-dom";



export default function Footer () {

    return (

      <Segment inverted vertical style={{ margin: '2em 0em 0em', padding: '2em 0em', position:'relative', bottom: 0, left:0, right:0, width: '100%'}}>
      <Container textAlign='center'>
        <Image centered size='mini' src={process.env.PUBLIC_URL + '/img/toslogo.png'}/>
        <List horizontal inverted divided link size='small'>
          <List.Item> <Link to='https://github.com/jeco1988/theopensource' target='blank_'> Github </Link>
          </List.Item>
          <List.Item ><Link to='/Donate'> Donate</Link>       
          </List.Item>
        </List>
      </Container>
    </Segment>

    )


}