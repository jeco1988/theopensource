import React, { useState } from 'react';
import { Container, Header, Card, Icon} from 'semantic-ui-react';

const data = [{"owner": "wp-graphql", "repositoryName":"wp-graphql", "gitHubID": "72453516", "userEmail": "bkernighan@techfriends.dev",
"userComment":[
    {"commentText":"This is a very good first project","commentAuthor":"Brian Kernighan"},{"commentText":"Some of the best programming is done on paper, really. Putting it into the computer is just a minor detail.",
"commentAuthor":"Max Kanat-Alexander"}]},
 {"owner": "zulip", "repositoryName":"zulip","gitHubID": "43160685", "userEmail": "mkanatalexander@techfriends.dev"},
 {"owner": "whitesmith","repositoryName": "rubycritic", "gitHubID": "13445293", "userEmail": "wtls@techfriends.dev", "userComment":[
    {"commentText":"I am happy that I am contributing for the project",
    "commentAuthor":"Why The Lucky Stiff"}]
},
 {"owner": "xenia-project","repositoryName": "xenia","gitHubID": "7550637","userComment":[
    {"commentText":"How can I contribute to this project?",
    "commentAuthor":"Max Kanat-Alexander"}
 ] }
]


export default function Home() {
  const isLoggedin = false;
  const [favourites, setFavourites] = useState([])
  return (
    <>
    {isLoggedin && <Container text style={{ marginTop: '7em' }}>
      favourites
    {data.map((d, i) => {
      
      if (favourites.find((f) => { 
          if (f === d.gitHubID) console.log('found ' + d.gitHubID)
        return f === d.gitHubID })) return <ProjectCard isLoggedin={isLoggedin} data={d} isFavourite={true} setFavourites={setFavourites} key={`favourites-${d.gitHubID}`}/>
    }) }
    </Container>}
    
    <Container text style={{ marginTop: '7em' }}>
      projects
      {data.map((d, i) => {
        return <ProjectCard isLoggedin={isLoggedin} isFavourite={!!(favourites.find((f) => f === d.gitHubID))} setFavourites={setFavourites}  data={d}key={`projects-${d.gitHubID}`}/>
      }) }
    </Container> </>
  );
}



const ProjectCard = (props) => {
  const { owner, gitHubID, repositoryName, userEmail, userComment} = props.data;
  const { isFavourite, setFavourites, isLoggedin} = props
  return (
    <Card>
      <Card.Content>
      <h1>
      {repositoryName}
      </h1>
        {isLoggedin &&<Icon
        style={{display: 'flex', float: 'right'}}
        size='micro'
        name={isFavourite ? "star" : "star outline"} 
        onClick = {() => {setFavourites((prev) => {
          if (isFavourite) {
            // If the project is already a favourite, remove it from the favourites list
            return prev.filter((favourite) => favourite !== gitHubID);
          } else {
            // If the project is not a favourite, add it to the favourites list
            return [...prev, gitHubID];}
        })}}/>}

      </Card.Content>

      <Card.Content description={gitHubID} />
      <Card.Content description={owner} />
    </Card>
  )

}