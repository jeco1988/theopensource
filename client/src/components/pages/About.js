// import React from 'react';
// import { Container, Header } from 'semantic-ui-react';

// export default function About() {
//   return (
//     <Container text style={{ marginTop: '7em' }}>
//       <Header as='h1'>About</Header>
//       <p>ABOUT This is the about page for our application.</p>
//       <p>You can use this page to provide information about your project, your team, or any other details you want to share with your users.</p>
//     </Container>
//   );
// }
import React from 'react';
import { Container, Header, Card, Icon, Image } from 'semantic-ui-react';

const About = () => {
  return (
    <>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>About</Header>
      <Card.Group itemsPerRow={3}>
        <Card>
          <Image src={process.env.PUBLIC_URL + '/img/jack.jpg'} alt="Jack" wrapped ui={false} />
          <Card.Content>
            <Card.Header>Jack Economos</Card.Header>
            <Card.Meta>
            {/* <span className='date'>Joined in 2015</span> */}
            </Card.Meta>
            <Card.Description>
              Hi, I'm Jack, I'm an up and coming Web Developer
            </Card.Description>
          </Card.Content>
        <Card.Content extra>
          <a href="https://github.com/jeco1988" target="blank_">
          <Icon link name='gitlab'/>
          My Github
          </a>
        </Card.Content>
      </Card>
      <Card>
        <Image src={process.env.PUBLIC_URL + '/img/shiham.jpg'} alt="Jack"  wrapped ui={false} />
        <Card.Content>
          <Card.Header>Shiham Jamaldeen</Card.Header>
          <Card.Meta>
          {/* <span className='date'>Joined in 2015</span> */}
          </Card.Meta>
          <Card.Description>
            Hi, I'm Shiham, I'm an up and coming Web Developer
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://github.com/shiham-jamaldeen" target="blank_">
          <Icon link name='gitlab'/>
          My Github
          </a>
        </Card.Content>
      </Card>
      <Card>
        <Image src={process.env.PUBLIC_URL + '/img/dale.jpg'} alt="Jack" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Dale Duivesteyn </Card.Header>
          <Card.Meta>
          {/* <span className='date'>Joined in 2015</span> */}
          </Card.Meta>
          <Card.Description>
          Hi, I'm Dale, I'm an up and coming Web Developer
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://github.com/daleduiv" target="blank_">
          <Icon link name='gitlab'/>
          My Github
          </a>
        </Card.Content>
      </Card>
    </Card.Group>
  </Container>
    
    </>
  );
};

export default About;
