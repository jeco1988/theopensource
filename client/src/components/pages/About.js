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
import { Container, Header, Segment } from 'semantic-ui-react';

const About = () => {
  return (
    <>
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>About</Header>
      <Segment>
        <p>
          This is an example app created using React and Semantic UI React. It demonstrates how to create a navigation bar using the `react-router-dom` library, and how to use the `useState` hook to manage state in a functional component.
        </p>
        <p>
          To navigate the app, simply click on the links in the navigation bar at the top of the page.
        </p>
      </Segment>
    </Container>
    </>
  );
};

export default About;
